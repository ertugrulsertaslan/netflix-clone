import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await serverAuth(req);

    const movies = await prismadb.movie.findMany();
    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 400 }
    );
  }
}
