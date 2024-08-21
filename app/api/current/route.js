import serverAuth from "@/lib/serverAuth";

export async function GET(req) {
  try {
    const { currentUser } = await serverAuth(req);
    //console.log("Current User in API:", currentUser);
    return new Response(JSON.stringify(currentUser), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(error.message, {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
