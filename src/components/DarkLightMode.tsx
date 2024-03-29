"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { CiDark, CiLight } from "react-icons/ci";
export default function DarkLightMode() {
  const { setTheme } = useTheme();

  const [test, setTest] = useState(false);
  const [light, setLight] = useState(test);

  const handleMode = () => {
    setLight((prev) => !prev);
    const isDark = light ? "dark" : "light";
    setTheme(isDark);
  };

  useEffect(() => {
    setTest(localStorage.getItem("theme") === "dark");
  }, []);

  return (
    <div onClick={handleMode} className="flex items-center cursor-pointer ">
      <button>{light ? <CiDark size={20} /> : <CiLight size={20} />}</button>
      <span className="ml-[.5rem] font-semibold">
        {" "}
        {light ? "Dark Mode" : "Light Mode"}
      </span>
    </div>
  );
}
