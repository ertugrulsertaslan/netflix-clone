import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await serverAuth(req);

    const { movieId } = params;

    if (typeof movieId !== "string") {
      return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
    }

    if (!movieId) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 400 }
    );
  }
}
