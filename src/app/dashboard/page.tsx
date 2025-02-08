import { auth } from "@/auth";
import Dashboard from "@/components/Dashboard";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Dashboard",
};

const page = async () => {
  const session = await auth();
  if (session?.user.role !== "admin") {
    redirect("/");
  }
  return <Dashboard />;
};

export default page;
