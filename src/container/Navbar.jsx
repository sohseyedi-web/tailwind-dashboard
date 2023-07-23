import { useEffect, useState } from "react";
import * as RiIcon from "react-icons/ri";

const Navbar = () => {
  const [dark, setDark] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const handleThemeSwitch = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };
  return (
    <header className=" bg-white w-full py-4 md:px-9 px-3 flex items-center justify-between border-b border-gray-300 border-solid">
      <div className="md:text-3xl text-2xl text-[#1a5cff] font-semibold">
        پنل کاربر
      </div>
      <div className="flex items-center">
        <div
          onClick={handleThemeSwitch}
          className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer"
        >
          {dark === "dark" ? (
            <RiIcon.RiSunLine size={20} />
          ) : (
            <RiIcon.RiMoonLine size={20} />
          )}
        </div>
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer">
          <RiIcon.RiLoginCircleLine size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
