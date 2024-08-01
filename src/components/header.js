import React from "react";
import Menu from "./menuItem";
import Link from "next/link";
import DarkMode from "./darkMode";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menu title="home" address="/" />
        <Menu title="about" address="/about" />
      </div>
      <div className="flex items-center gap-5">
        <DarkMode />
        <Link href={"/"} className="flex gap-2 items-center">
          <span className="text-2xl bg-yellow-600 font-bold py-1 px-2 rounded-lg">
            NTRe
          </span>
          <span className="text-xl hidden sm:inline">tomorrow</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
