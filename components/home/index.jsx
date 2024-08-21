"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import Bilboard from "../bilbord";
import Navbar from "../navbar";

export default function HomeContainer() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <p className="text-white">Logged in as : {user?.name}</p>
      <Navbar />
      <Bilboard />
    </>
  );
}
