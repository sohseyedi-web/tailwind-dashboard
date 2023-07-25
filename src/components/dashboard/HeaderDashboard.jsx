import * as RiIcon from "react-icons/ri";
import * as HiIcon from "react-icons/hi";
import { toPersianNumbers, toPersianNumbersWithComma } from "../../utils/toPersianNumber";

const HeaderDashboard = () => {
  return (
    <div className="py-1">
          <div className="flex items-center justify-between flex-wrap space-y-2">
            <div className="flex items-center px-2 gap-x-3 py-3  rounded-lg shadow-md lg:w-[23%] dark:bg-[#213555] w-[48%]">
              <RiIcon.RiMoneyDollarCircleLine className="w-[3.2rem] h-[3.2rem] text-[#1a5cff] dark:text-[#f3f6ff]" />
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold">کیف پول</h5>
                <span className="font-medium md:text-base text-sm ">
                  {toPersianNumbersWithComma(100000000000)} تومان
                </span>
              </div>
            </div>
            <div className="flex items-center px-2 gap-x-3 py-3  rounded-lg shadow-md lg:w-[23%] dark:bg-[#213555] w-[48%]">
              <HiIcon.HiTag className="w-[3rem] h-[3rem] text-[#1a5cff] dark:text-[#f3f6ff]" />
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold">محصولات من</h5>
                <span className="font-medium md:text-base text-sm">
                  {toPersianNumbersWithComma(12)}
                </span>
              </div>
            </div>
            <div className="flex items-center px-2 gap-x-3 py-3  rounded-lg shadow-md lg:w-[23%] dark:bg-[#213555] w-[48%]">
              <RiIcon.RiGroupLine className="w-[3rem] h-[3rem] text-[#1a5cff] dark:text-[#f3f6ff]" />
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold"> دنبال کنندگان</h5>
                <span className="text font-medium md:text-base text-sm">
                  {toPersianNumbersWithComma(0)} نفر
                </span>
              </div>
            </div>
            <div className="flex items-center px-2 gap-x-3 py-3  rounded-lg shadow-md lg:w-[23%]  dark:bg-[#213555] w-[48%]">
              <HiIcon.HiOutlineCalendar className="w-[3rem] h-[3rem] text-[#1a5cff] dark:text-[#f3f6ff]" />
              <div className="flex flex-col">
                <h5 className="text-lg font-semibold">تاریخ عضویت</h5>
                <span className="font-medium md:text-base text-sm">
                  {toPersianNumbers(new Date().toLocaleDateString("fa-IR"))}
                </span>
              </div>
            </div>
          </div>
        </div>
  )
}

export default HeaderDashboard