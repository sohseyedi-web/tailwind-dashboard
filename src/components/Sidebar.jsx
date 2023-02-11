import * as Hi2Icon from "react-icons/hi2";
import * as HiIcon from "react-icons/hi";
import { useState } from "react";

const data = [
  { icon: <Hi2Icon.HiOutlineSquares2X2 size={23} />, text: "داشبورد" },
  { icon: <Hi2Icon.HiOutlineUserCircle size={23} />, text: "پروفایل" },
  { icon: <HiIcon.HiOutlineChatAlt2 size={23} />, text: "گفتگو ها", notif: 2 },
  { icon: <HiIcon.HiOutlineMail size={23} />, text: "ارسال دعوت نامه" },
  { icon: <Hi2Icon.HiOutlineNewspaper size={23} />, text: "صدور پیش فاکتور" },
  { icon: <HiIcon.HiUserAdd size={23} />, text: "عضویت در کانتمو" },
  { icon: <Hi2Icon.HiOutlineReceiptRefund size={23} />, text: "نمایش آثار" },
];

const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <aisde
      className={` ${
        show ? "w-[190px]" : "w-[50px]"
      } fixed right-0 top-[4.3rem]  py-3 px-2 bg-white border-l border-gray-300 border-solid h-full transition-all duration-300`}
    >
      <div
        onClick={() => setShow(!show)}
        className={`cursor-pointer absolute -left-3 top-1/2 rounded-full transition-all duration-300 border-2 border-[#d7dce8] text-[#1a5cff] border-solid bg-white ${
          !show && "rotate-180"
        }`}
      >
        <HiIcon.HiChevronRight size={23} />
      </div>
      <ul className="pt-1">
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex rounded-md py-2 my-1 pr-[5px] cursor-pointer hover:bg-blue-500  text-sm items-center gap-x-4 transition-all duration-300 hover:transition-all hover:duration-300 hover:text-white
              ${index === 0 && "bg-blue-500 text-white"} `}
          >
            <span className={`${index === 0 && "text-center"}`}>
              {item.icon}
            </span>
            <span
              className={`${
                !show && "hidden"
              } origin-left duration-200 transition-all flex`}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </aisde>
  );
};

export default Sidebar;
