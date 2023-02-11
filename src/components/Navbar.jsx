import * as RiIcon from "react-icons/ri";

const Navbar = () => {
  return (
    <header className=" bg-white w-full py-4 px-9 flex items-center justify-between border-b border-gray-300 border-solid">
      <div className="text-3xl text-[#1a5cff] font-semibold">شمیم</div>
      <div className="flex items-center">
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer">
          <RiIcon.RiNotification3Line size={20} />
          <span className="absolute -top-2 -right-2  bg-[#1a5cff] rounded-full  text-center w-6 h-6 text-white">
            2
          </span>
        </div>
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer">
          <RiIcon.RiSettings4Line size={20} />
        </div>
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer">
          <RiIcon.RiLoginCircleLine size={20} />
        </div>
        <div className="mr-4 flex w-9 h-9 items-center justify-center rounded-full border-2 border-solid border-[#d7dce8]  relative cursor-pointer">
          <RiIcon.RiMoonLine size={20} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
