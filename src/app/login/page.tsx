import { auth } from "@/auth";
import LoginForm from "@/components/Login";
import { redirect } from "next/navigation";
import React from "react";
export const metadata = {
  title: "Login",
};

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return <LoginForm />;
};

export default page;
