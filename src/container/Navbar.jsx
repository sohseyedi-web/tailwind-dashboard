import * as RiIcon from "react-icons/ri";

const Navbar = ({ onSwitch, dark }) => {
  return (
    <header className=" bg-white dark:bg-[#213555] w-full py-4 md:px-9 px-3 flex items-center justify-between border-b border-gray-300">
      <div className="md:text-3xl text-2xl text-[#1a5cff] dark:text-[#f3f6ff] font-semibold">
        پنل کاربر
      </div>
      <div className="flex items-center">
        <div
          onClick={onSwitch}
          className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2  border-gray-300 dark:border-[#f3f6ff] cursor-pointer"
        >
          {dark === "dark" ? (
            <RiIcon.RiSunLine size={20} />
          ) : (
            <RiIcon.RiMoonLine size={20} />
          )}
        </div>
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-gray-300 dark:border-[#f3f6ff] cursor-pointer">
          <RiIcon.RiLoginCircleLine size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
