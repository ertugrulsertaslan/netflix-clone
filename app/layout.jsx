"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import useCurrentUser from "@/hooks/useCurrentUser";
import { usePathname } from "next/navigation";
export default function RootLayout({ children }) {
  const { data: user } = useCurrentUser();
  const pathname = usePathname();
  const isLoginOrProfilePageOrWatchPage =
    pathname === "/login" ||
    pathname === "/profiles" ||
    pathname.startsWith("/watch");

  return (
    <html lang="en" className={inter.className}>
      <body>
        <header>
          {!isLoginOrProfilePageOrWatchPage && <Navbar user={user?.name} />}
        </header>
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
