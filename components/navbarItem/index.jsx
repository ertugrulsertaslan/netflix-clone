export default function NavbarItem({ label }) {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition text-[8px] ">
      {label}
    </div>
  );
}
