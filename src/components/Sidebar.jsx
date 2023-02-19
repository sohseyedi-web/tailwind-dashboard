import * as Hi2Icon from "react-icons/hi2";
import * as HiIcon from "react-icons/hi";

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
  return (
    <aisde
      className={`w-[50px] lg:w-[14%] py-3 px-2 bg-white border-l border-gray-300 border-solid  transition-all relative duration-300`}
    >
      <ul className="pt-1">
        {data.map((item, index) => (
          <li
            key={index}
            className={`flex rounded-md py-2 my-1 pr-[5px] cursor-pointer hover:bg-blue-500  text-sm items-center gap-x-4 transition  hover:transition hover:text-white
              ${index === 0 && "bg-blue-500 text-white"} `}
          >
            <span className={`${index === 0 && "text-center"}`}>
              {item.icon}
            </span>
            <span
              className={`origin-left duration-200 transition-all hidden lg:flex`}
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
