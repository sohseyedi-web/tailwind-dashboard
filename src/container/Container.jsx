import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const Container = ({ children }) => {
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
    <>
      <Navbar dark={dark} onSwitch={handleThemeSwitch}/>
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </>
  );
};

export default Container;
