"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log(theme);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <FaRegMoon /> : <CiLight />}
    </button>
  );
};

export default ThemeSwitch;
