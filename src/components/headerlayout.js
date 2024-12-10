"use client";
import React, { useState } from "react";
import MenuBar from "./menuBar";
import Header from "./header";

export default function Headerlayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MenuBar isMenuOpen={isMenuOpen} />
    </>
  );
}
