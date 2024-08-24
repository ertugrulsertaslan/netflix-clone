import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await serverAuth(req);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);
    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });
    return new Response(JSON.stringify(randomMovies[0]), {
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
