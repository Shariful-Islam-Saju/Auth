import  { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string; // ✅ Add role
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    role?: string; // ✅ Add role
  }

  interface JWT {
    id: string;
    role?: string; // ✅ Add role to JWT
  }
}
