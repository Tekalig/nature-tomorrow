import React from "react";
import Menu from "./menuItem";
import Link from "next/link";
import DarkMode from "./darkMode";
import Navbar from "./navbar";
import { AiOutlineMenu } from "react-icons/ai";

function Header({ toggleMenu }) {
  return (
    <div className="flex justify-between items-center py-3 px-5 w-screen bg-gray-200 dark:bg-gray-700">
      <div className="flex justify-between items-center w-1/2 max-sm:hidden">
        <div className="flex gap-5">
          <Menu title="home" address="/" />
          <Menu title="about" address="/about" />
        </div>
        <div className="flex gap-5">
          <Navbar />
        </div>
      </div>
      <div className="hidden text-2xl cursor-pointer max-sm:inline-block">
        <button
          className="hidden text-2xl cursor-pointer max-sm:inline-block"
          onClick={toggleMenu}
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div className="flex items-center gap-5">
        <DarkMode />
        <Link href={"/"} className="flex gap-2 items-center">
          <span className="text-2xl bg-green-600 font-bold py-1 px-2 rounded-lg">
            NTRe
          </span>
          <span className="text-xl hidden sm:inline">tomorrow</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
