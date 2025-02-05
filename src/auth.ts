import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import db from "./lib/db";
import User from "./model/user";
import { compare } from "bcryptjs";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credential) => {
        const email = credential.email as string | undefined;
        const password = credential.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide Email and Password");
        }

        await db();
        const user = await User.findOne({ email }).select("+password +role");

        if (!user) {
          throw new CredentialsSignin("User not found");
        }

        if (!user.password) {
          throw new CredentialsSignin("User not found");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new CredentialsSignin("User not found");
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
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
