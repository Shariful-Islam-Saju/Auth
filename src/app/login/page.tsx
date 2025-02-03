"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
  };

  const signIn = (provider: string) => {
    console.log("Sign in with ", provider);
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl shadow-lg p-4 sm:p-6 md:p-8">
        <CardHeader>
          <CardTitle className="text-center text-xl sm:text-2xl">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full sm:text-lg">
              Login
            </Button>
          </form>
            <div className="flex items-center justify-center space-x-2 my-6">
            <div className="h-px w-full bg-gray-300" />
            <p className="text-gray-500">or</p>
            <div className="h-px w-full bg-gray-300" />
            </div>
          <div className="flex space-x-10">
            <Button
              onClick={() => signIn("google")}
              className="flex items-center py-5   justify-center space-x-2 w-full bg-white text-black border border-gray-300 hover:bg-gray-100"
            >
              <FcGoogle className="text-xl" />
              <span>Continue with Google</span>
            </Button>
            <Button
              onClick={() => signIn("github")}
              className="flex items-center  py-5 justify-center space-x-2 w-full bg-black text-white hover:bg-gray-800"
            >
              <FaGithub className="text-xl" />
              <span>Continue with GitHub</span>
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
