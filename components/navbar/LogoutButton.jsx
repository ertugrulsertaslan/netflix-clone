import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <div
      onClick={handleLogout}
      className="px-3 flex justify-center text-center hover:underline items-center border-t border-gray-500"
    >
      <p className="mt-4">Sign out of Netflix</p>
    </div>
  );
};

export default LogoutButton;
