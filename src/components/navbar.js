import React from "react";
import NavbarItem from "./navbarItem";

export default function Navbar() {
  return (
    <div className="flex items-center gap-5">
      <NavbarItem title="Trending" param="fatchTrending" />
      <NavbarItem title="Top Rated" param="fatchTopRated" />
    </div>
  );
}
