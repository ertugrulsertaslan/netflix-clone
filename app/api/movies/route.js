import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export async function GET(req, res) {
  try {
    await serverAuth(req);

    const movies = await prismadb.movie.findMany();
    return new Response(JSON.stringify(movies), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return res.status(400).end();
  }
}
