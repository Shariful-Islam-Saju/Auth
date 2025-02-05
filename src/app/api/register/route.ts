import db from "@/lib/db";
import User from "@/model/user";
import { NextResponse } from "next/server";
import  { hash } from 'bcryptjs'
// Function to validate form data
interface FormData {
  name: string;
  email: string;
  password: string;
}

// Updated POST function
export async function POST(req: Request) {
  try {
    // Parse incoming form data
    const formData = await req.json();

    // Validate form data

    const isValid = validateFormData(formData);
    // Simulate saving to a database (replace with actual DB logic)
    if (isValid) {
      const savedUser = await saveUserToDatabase(formData);
      return NextResponse.json(
        { message: "User registered successfully!", user: savedUser },
        { status: 201 }
      );
    } else {
      throw new Error("Invalid form data");
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error occurred:", error);
      return NextResponse.json(
        { error: error.message || "Something went wrong" },
        { status: 500 }
      );
    } else {
      console.error("Unexpected error occurred:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}

function validateFormData(formData: FormData) {
  const { name, email, password } = formData;
  if (!name || !email || !password) {
    throw new Error("Missing required fields");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
  return true;
}

// Function to simulate saving user to a database
async function saveUserToDatabase(formData: FormData) {
  // Replace this with actual database logic
  await db();

  const existingUser = await User.findOne({ email: formData.email });
  if (existingUser) {
    throw new Error("User with this email already exists");
  }

  const hashedPassword = await hash(formData.password, 10)
  const newUser = await new User({
    name: formData.name,
    email: formData.email,
    password: hashedPassword, 
    role: "user",
  });

  return newUser.save();
}
