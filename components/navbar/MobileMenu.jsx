import { VscTriangleUp } from "react-icons/vsc";
import Link from "next/link";
export default function MobileMenu({ visible }) {
  if (!visible) {
    return null;
  }
  return (
    <>
      <div className="absolute top-2.5 left-2">
        <VscTriangleUp className="text-white" />
      </div>
      <div className="bg-black w-28 absolute top-5 left-0 py-5 flex-col border border-black bg-opacity-80 flex text-[6px]">
        <div className="flex flex-col gap-3 text-white text-center space-y-2">
          <Link href="/">Home</Link>
          <Link href="/">Series</Link>
          <Link href="/">Films</Link>
          <Link href="/">New & Popular</Link>
          <Link href="/mylist">My List</Link>
          <Link href="/"> Browse by languages</Link>
        </div>
      </div>
    </>
  );
}
