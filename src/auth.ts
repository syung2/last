import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

import { AuthUser } from "./lib/models";
import { compare } from "bcryptjs";
import { connectDB } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new CredentialsSignin("Missing email, password fields");
        }

        await connectDB();
        const user = await AuthUser.findOne({ email }).select(
          "+password +role"
        );
        if (!user) {
          throw new CredentialsSignin("User not found");
        }

        const isMatched = await compare(String(password), user.password);
        if (!isMatched) {
          throw new Error("Password does not match");
        }

        const userData = {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: async ({ user, account }: { user: any; account: any }) => {
      if (account?.provider === "google" || account?.provider === "github") {
        try {
          const { email, name, image, id } = user;
          await connectDB();
          const alereadyUser = await AuthUser.findOne({ email });

          // 회원이 없으면 가입시켜주고
          if (!alereadyUser) {
            await AuthUser.create({
              name,
              email,
              image,
              authProviderId: id,
            });
          }
          // 가입된 정보를 다시 조회, 기존에 회원 정보가 있었던 사람은 가잆없이 조회
          const myUser = await AuthUser.findOne({ email });
          // 조회된 정보(DB의 role을 넣어줌)
          // 이때, 이 값들이 jwt, session 쪽에 있어야함

          user.role = myUser.role;
          user.name = myUser.name;

          return true;
        } catch (error) {
          throw new Error("Error while");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.role = user.role;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.name = token.name;
      }
      return session;
    },
  },
});
