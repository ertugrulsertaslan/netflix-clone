import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prismadb from "@/lib/prismadb";

const serverAuth = async (req) => {
  const session = await getServerSession({ req, ...authOptions });

  //console.log("Session data in serverAuth:", session);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  //console.log("Current User:", currentUser);

  if (!currentUser) {
    throw new Error("User not found in database");
  }

  return { currentUser };
};

export default serverAuth;
