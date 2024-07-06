import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import React from "react";

function Menu(props) {
  const { title, address } = props;
  console.log(title, address);
  return (
    <div>
      <Link href={address} className="hover:text-amber-400">
        {title === "home" ? (
          <AiFillHome className="sm:hidden text-2xl" />
        ) : (
          <AiFillInfoCircle className="sm:hidden text-2xl" />
        )}
        <p className="uppercase hidden sm:inline text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default Menu;
