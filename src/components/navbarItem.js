"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const place = searchParams.get("place");
  return (
    <div>
      <Link
        href={`/?place=${param}`}
        className={`hover:text-green-600 font-semibold ${
          place === param
            ? "underline underline-offset-8 decoration-2 decoration-green-600 rounded-lg"
            : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
