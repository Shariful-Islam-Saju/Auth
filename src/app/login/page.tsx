import { auth } from "@/auth";
import LoginForm from "@/components/Login";
import React from "react";
export const metadata = {
  title: "Login",
};

const page = async () => {
  const session = await auth();
  console.log("This is Session in Login Page", session);
  return <LoginForm />;
};

export default page;
