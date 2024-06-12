import { auth } from "@/auth";
import { cache } from "react";

let cachedSessionPromise: any = null;

export const getSession = async () => {
  const session = await auth();
  return session;
};
