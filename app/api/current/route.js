import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    const { currentUser } = await serverAuth(request);
    return NextResponse.json(currentUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 400 }
    );
  }
}
