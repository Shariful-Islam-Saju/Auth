import { signIn } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const result = await signIn("credentials", {
      redirect: false, // Prevents automatic redirection
      callbackUrl: "/", // Correct property name
      email,
      password,
    });

    // Check for an error in the response
    if (result?.error) {
      return NextResponse.json({ error: result.error }, { status: 401 });
    }

    return NextResponse.json(
      { message: "Login successful", result, redirect: "/" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
