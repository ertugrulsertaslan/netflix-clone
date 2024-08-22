import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { without } from "lodash";
export async function POST(req) {
  try {
    const { currentUser } = await serverAuth(req);
    const { movieId } = await req.json();

    if (!movieId) {
      return NextResponse.json(
        { error: "movieId is required" },
        { status: 400 }
      );
    }
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
    }
    const user = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: {
          push: movieId,
        },
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return res.status(400).end();
  }
}

export async function DELETE(req) {
  try {
    const { currentUser } = await serverAuth(req);
    const { movieId } = await req.json();

    if (!movieId) {
      return NextResponse.json(
        { error: "movieId is required" },
        { status: 400 }
      );
    }
    const existingMovie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!existingMovie) {
      return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
    }

    const updatedFavoriteIds = without(currentUser.favoriteIds || [], movieId);

    const updatedUser = await prismadb.user.update({
      where: {
        email: currentUser.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Invalid movie ID" }, { status: 400 });
  }
}
