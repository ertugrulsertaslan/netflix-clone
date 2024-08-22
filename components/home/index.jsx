"use client";
import useCurrentUser from "@/hooks/useCurrentUser";
import Billboard from "../billboard";
import Navbar from "../navbar";

export default function HomeContainer() {
  const { data: user } = useCurrentUser();

  // <p className="text-white">Logged in as : {user?.name}</p>
  return (
    <>
      <Navbar user={user?.name} />
      <Billboard />
    </>
  );
}
