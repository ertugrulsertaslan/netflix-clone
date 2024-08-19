export default function NavbarItem({ label }) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition text-sm font-light">
      {label}
    </div>
  );
}
