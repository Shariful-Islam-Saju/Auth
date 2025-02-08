import NextAuth from "next-auth";
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
          throw new Error("Please provide Email and Password");
        }

        await db();
        const user = await User.findOne({ email }).select("+password +role");

        if (
          !user ||
          !user.password ||
          !(await compare(password, user.password))
        ) {
          throw new Error("Invalid credentials");
        }

        return {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        };
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
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      console.log("This is Token", token);
      console.log("This is user", user);

      return token;
    },
    session: async ({ session, token }) => {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      if (token?.role) {
        session.user.role = token.role;
      }
      return session;
    },
    signIn: async ({ account, user }) => {
      if (!account) return false;

      try {
        await db();

        if (account.provider === "google") {
          const { email, id, name } = user;
          if (!email) return false;

          let existingUser = await User.findOne({ email });

          if (!existingUser) {
            existingUser = await User.create({
              name,
              email,
              authProviderId: id,
              role: "user",
            });
          }

          user.role = existingUser.role;

          return true;
        }

        return account.provider === "credentials";
      } catch {
        return false;
      }
    },
  },
});
