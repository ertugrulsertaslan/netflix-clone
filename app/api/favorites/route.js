import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth(req);

    const favoriteMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });
    return new Response(JSON.stringify(favoriteMovies), {
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
