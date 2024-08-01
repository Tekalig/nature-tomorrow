"use client";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
function DarkMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      {isMounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-2xl hover:text-yellow-800 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-2xl hover:text-yellow-800 cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}

export default DarkMode;
