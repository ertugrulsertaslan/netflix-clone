import { VscTriangleUp } from "react-icons/vsc";
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
        <div className="flex flex-col gap-3 text-white">
          <div className="px-3 text-center hover:underline">Home</div>
          <div className="px-3 text-center hover:underline">Series</div>
          <div className="px-3 text-center hover:underline">Films</div>
          <div className="px-3 text-center hover:underline">New & Popular</div>
          <div className="px-3 text-center hover:underline">My List</div>
          <div className="px-3 text-center hover:underline">
            Browse by languages
          </div>
        </div>
      </div>
    </>
  );
}
