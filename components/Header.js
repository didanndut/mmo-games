import Link from "next/link";
import Image from "next/image";
import apple_icon from "../public/assets/apple-icon.png";

export default function Header() {
  return (
    <header class="text-gray-400 bg-red-500 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <Image src={apple_icon} alt="icon" width="40" height="40" />
          <span className="ml-3 text-xl">MMO Games</span>
        </Link>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start ">
          <a
            href="https://www.instagram.com/ovrwght/"
            className="ml-3 text-gray-700  hover:text-gray-900"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
        </span>

      </div>
    </header>
  );
}