import { FaSearch } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  return (
    <header className="text-white fixed z-10 px-10">
      <div className="flex justify-between p-2">
        <div className="flex space-x-3">
          <img className="h-10" src="/images/logo.png" alt="" />
        </div>
        <nav className="space-x-5 flex items-center ml-5">
          <Link className="text-xs" href="/">
            Home
          </Link>
          <Link className="text-xs" href="/">
            Series
          </Link>
          <Link className="text-xs" href="/">
            Films
          </Link>
          <Link className="text-xs" href="/">
            New & Popular
          </Link>
          <Link className="text-xs" href="/">
            My List
          </Link>
          <Link className="text-xs" href="/">
            Browse by languages
          </Link>
        </nav>
        
      </div>
    </header>
  );
}
