"use server";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { AuthUser } from "./models";
import { hash } from "bcryptjs";
import { connectDB } from "./db";
import { revalidatePath } from "next/cache";
export const googleLogin = async () => {
  await signIn("google", { callbackUrl: "/" });
};
export const githubLogin = async () => {
  await signIn("github", { callbackUrl: "/" });
};

export const login = async (prevFormData: any, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await signIn("credentials", {
      redirect: false,
      callbackUrl: "/",
      email,
      password,
    });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return "Login failed";
  }
  redirect("/");
};

export const register = async (prev: string, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    throw new Error("Please provide all the necessary information");
  }

  connectDB();
  const existingUser = await AuthUser.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const hashedPassword = await hash(String(password), 12);
  await AuthUser.create({
    email,
    name,
    password: hashedPassword,
  });
  console.log("User created successfully");
  redirect("/login");
};

export const logout = async () => {
  await signOut();
  revalidatePath("/");
};
export const getMovies = async (type: string, page: number) => {
  const data = await (
    await fetch(
      "https://last-pearl.vercel.app/api/movies?type=" + type + "&page=" + page
    )
  ).json();
  return data;
};
