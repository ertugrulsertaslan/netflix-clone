import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center text-left text-white p-2 md:p-0">
        <div className="w-full md:w-1/2 flex text-2xl space-x-6 mb-4 ml-6">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <div className="w-full md:w-1/2 text-neutral-400 text-xs mb-4 ml-4 md:ml-0">
          <ul className="flex  flex-wrap">
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Audio Description</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Help Center</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Gift Cards</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Media Center</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Investor Relations</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Jobs</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Terms of Use</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Privacy</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Legal Notices</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Cokkie Preferences</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Corporate Information</li>
            <li className="w-1/2 md:w-1/4 pr-6 pb-4">Contact Us</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 text-neutral-400 text-xs mb-8 ml-4 md:ml-0">
          <p className="w-24 h-8 border border-white p-2 mb-4">Service Code</p>
          <p className="">© 1997-2024 Netflix, Inc.</p>
        </div>
      </div>
    </>
  );
}
