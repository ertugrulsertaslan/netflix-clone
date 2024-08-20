import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prismadb from "@/lib/prismadb";
import { compare } from "bcrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }

        const user = await prismadb.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("Incorrect Email or Password");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Incorrect Email or Password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const POST = async (request) => {
  return NextAuth(request, authOptions);
};

export const GET = async (request) => {
  return NextAuth(request, authOptions);
};
