import * as RiIcon from "react-icons/ri";
import Avatar from "../assets/123.jpg";
import Cover from "../assets/Crypto.jpg";
import { toPersianNumbers } from "../utils/toPersianNumber";
import { toPersianNumbersWithComma } from "./../utils/toPersianNumber";

const Profile = () => {
  return (
    <section className="flex-1 h-screen overflow-y-auto">
      <div className="w-[95%] mx-auto pt-6">
        <h3 className="title">پروفایل</h3>
        <div className="flex gap-x-3 lg:flex-row flex-col my-5 pb-16">
          <div className="lg:w-[22%] w-full mb-5 h-[40%] dark:bg-[#213555] shadow-md rounded-md px-2 border-2 border-[#d7dce8]">
            <div className="flex items-center justify-between py-2">
              <h5 className="text-lg font-semibold mb-3">اطلاعات شناسایی</h5>
              <span>
                <RiIcon.RiQuillPenLine size={23} />
              </span>
            </div>
            <div className="my-2 flex items-center flex-col">
              <img
                src={Avatar}
                alt=""
                className="w-20 h-20 rounded-full shadow-md"
              />
              <div className="space-y-2 w-full mt-3 text-sm font-semibold">
                <div className="flex gap-x-1">
                  <span>نام شرکت : </span>
                  <p>تک شاپ</p>
                </div>
                <div className="flex gap-x-1">
                  <span>نام مسئول : </span>
                  <p>سهیل سیدی</p>
                </div>
                <div className="flex gap-x-1">
                  <span>آدرس شرکت: </span>
                  <p>ایران،تهران،میدان کاج،کوچه اول</p>
                </div>
                <div className="flex gap-x-1">
                  <span>شماره تلفن : </span>
                  <p>{toPersianNumbers("021000000")}</p>
                </div>
                <div className="flex gap-x-1">
                  <span>شناسه پنل: </span>
                  <p>{toPersianNumbers("1x2598ysz")}</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-8 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                  <RiIcon.RiInstagramFill />
                </div>
                <div className="w-8 mx-3 my-2 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                  <RiIcon.RiGithubFill />
                </div>
                <div className="w-8 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                  <RiIcon.RiLinkedinFill />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[22%] h-[40%] dark:bg-[#213555] shadow-md rounded-md p-2 border-2 border-[#d7dce8]">
            <h5 className="text-lg font-semibold mb-3">امور بانکی</h5>
            <div className="flex flex-col space-y-3 font-semibold">
              <div className="flex gap-x-1">
                <span>شماره حساب :</span>
                <p>xxxx-yyyy-uuuu-zzzz</p>
              </div>
              <div className="flex gap-x-1">
                <span>نام بانک:</span>
                <p>بانک فردای آرام</p>
              </div>
              <div className="flex gap-x-1">
                <span> درآمد کل:</span>
                <p>{toPersianNumbersWithComma(12000000)} تومان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
