import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse incoming form data
    const formData = await req.json();
    console.log(formData);

    // Simulate saving to a database (replace with actual DB logic)
    return NextResponse.json(
      { message: "User found successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
