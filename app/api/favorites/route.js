import { without } from "lodash";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export async function GET(req, res) {
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
    return res.status(400).end();
  }
}
