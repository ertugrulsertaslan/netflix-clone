"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Analytics } from "@vercel/analytics/react";
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
      <body className="flex flex-col min-h-screen">
        <header>
          {!isLoginOrProfilePageOrWatchPage && <Navbar user={user?.name} />}
        </header>
        <main className="flex-grow">{children}</main>
        <footer>{!isLoginOrProfilePageOrWatchPage && <Footer />}</footer>
        <Analytics />
      </body>
    </html>
  );
}
