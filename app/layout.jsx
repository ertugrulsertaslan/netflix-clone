"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import useCurrentUser from "@/hooks/useCurrentUser";

export default function RootLayout({ children }) {
  const { data: user } = useCurrentUser();
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar user={user?.name} />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
