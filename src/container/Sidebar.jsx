import * as Hi2Icon from "react-icons/hi2";
import * as RiIcon from "react-icons/ri";
import { NavLink } from "react-router-dom";

const data = [
  {
    icon: <Hi2Icon.HiOutlineSquares2X2 size={23} />,
    text: "داشبورد",
    path: "/",
  },
  {
    icon: <Hi2Icon.HiOutlineUserCircle size={23} />,
    text: "پروفایل",
    path: "/profile",
  },
  {
    icon: <RiIcon.RiCustomerService2Line size={23} />,
    text: "پشتیبانی",
    path: "/support",
  },
  {
    icon: <RiIcon.RiSettings4Line size={23} />,
    text: "تنظیمات",
    path: "/setting",
  },
  {
    icon: <RiIcon.RiNotification3Line size={23} />,
    text: "اعلان ها",
    path: "/notification",
  },
];

const Sidebar = () => {
  return (
    <aisde
      className={`w-[50px] h-screen overflow-y-auto lg:w-[14%] py-3 px-2 bg-white dark:bg-[#213555] border-l border-gray-300 border-solid transition-all duration-300`}
    >
      <ul className="pt-1">
        {data.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({
              isActive,
            }) => `flex rounded-md py-2 my-1 pr-[5px] cursor-pointer hover:bg-blue-500 duration-300 text-sm items-center gap-x-4 transition-all   hover:text-white
            ${isActive && "bg-blue-500 text-white duration-300"} `}
          >
            <span className={`${index === 0 && "text-center"}`}>
              {item.icon}
            </span>
            <span
              className={`origin-left duration-200 transition-all hidden lg:flex`}
            >
              {item.text}
            </span>
          </NavLink>
        ))}
      </ul>
    </aisde>
  );
};

export default Sidebar;
