"use server";

import { signIn } from "@/auth";

export async function signInByProvider(provider: string) {
  signIn(provider);
}
