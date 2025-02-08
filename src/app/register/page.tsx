import { auth } from "@/auth";
import RegisterForm from "@/components/Register";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Register",
};

const page = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return <RegisterForm />;
};

export default page;
