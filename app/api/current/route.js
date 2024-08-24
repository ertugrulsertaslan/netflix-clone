import serverAuth from "@/lib/serverAuth";

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth(req);
    return new Response(JSON.stringify(currentUser), {
      status: 200,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(error.message, {
      status: 500,
    });
  }
}
