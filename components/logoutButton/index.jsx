import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <button
      onClick={handleLogout}
      className="h-10 w-full text-white bg-red-500"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
