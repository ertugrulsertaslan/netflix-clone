import Link from "next/link";

export default function NavbarItem({ label, href }) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition text-sm">
      <Link href={href}>{label}</Link>
    </div>
  );
}
