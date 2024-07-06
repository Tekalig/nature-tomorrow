import React from "react";
import Menu from "./menuItem";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <Menu title="home" address="/" />
        <Menu title="about" address="/about" />
      </div>
      <Link href={'/'} className="flex gap-2 items-center">
        <span className="text-2xl bg-amber-400 font-bold py-1 px-2 rounded-lg">NTRe</span>
        <span className="text-xl hidden sm:inline">tomorrow</span>
      </Link>
    </div>
  );
}

export default Header;
