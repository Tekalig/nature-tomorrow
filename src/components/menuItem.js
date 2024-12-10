import Link from "next/link";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import React from "react";

function Menu({ address, title }) {
  return (
    <div>
      <Link href={address} className="hover:text-green-600">
        {title === "home" ? (
          <AiFillHome className="text-2xl max-sm:hidden" />
        ) : (
          <AiFillInfoCircle className="text-2xl  max-sm:hidden" />
        )}
        <p className="uppercase inline sm:hidden text-sm">{title}</p>
      </Link>
    </div>
  );
}

export default Menu;
