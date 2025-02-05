"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-300 p-4 fixed top-0 w-full z-10">
      <MaxWidthWrapper>
        <div className="max-w-7xl mx-auto  flex justify-between items-center">
          <Link href="/" className=" text-2xl font-semibold">
            MyLogo
          </Link>
          <div className="space-x-4">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/dashboard" className="">
              Dashboard
            </Link>
            <Link href="/register" className="">
              Register
            </Link>
            <Link href="/login" className="">
              Login
            </Link>{" "}
            <Button
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
