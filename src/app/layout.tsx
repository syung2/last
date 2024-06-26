import { signOut } from "@/auth";
import "./globals.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Logout</button>
        </form>
      </body>
    </html>
  );
}
