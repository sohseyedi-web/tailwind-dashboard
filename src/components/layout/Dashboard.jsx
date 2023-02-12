import * as RiIcon from "react-icons/ri";
import Profile from '../../assets/123.jpg'

const Dashboard = () => {
  return (
    <main className="text-center w-[85%]  mx-auto pt-6">
      <div className="flex px-2">
        <div className="w-[22%] bg-white shadow-lg rounded-xl px-2">
          <div className="flex items-center justify-between py-2 text-[#aaa]">
            <h5>اطلاعات شناسایی</h5>
            <span>
              <RiIcon.RiQuillPenLine size={23} />
            </span>
          </div>
          <div className="my-2 flex items-center flex-col">
            <img src={Profile} alt="" className="w-20 h-20 rounded-full border-2 border-solid border-[#1a5cff]"/>
            <p className="my-2 text-[#1a5cff] font-bold">سهیل سیدی</p>
            <div className="flex items-center justify-center">
              <div className="w-8 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                <RiIcon.RiInstagramFill/>
              </div>
              <div className="w-8 mx-3 my-2 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                <RiIcon.RiGithubFill/>
              </div>
              <div className="w-8 h-8 bg-white border-2 border-solid border-[#d7dce8] flex items-center justify-center text-[#6a7595] rounded-full">
                <RiIcon.RiLinkedinFill/>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-2 text-[#aaa]">
            <h5>مهارت ها</h5>
            <span>
              <RiIcon.RiQuillPenLine size={23} />
            </span>
          </div>
          <div className="flex items-center  flex-wrap">
            <div className="rounded  py-1 my-2 px-2 bg-[#d7dce8]">طراحی سایت</div>
            <div className="rounded mx-4  py-1 px-2 bg-[#d7dce8]">تجریه کاربری</div>
            <div className="rounded  py-1 my-2 px-2 bg-[#d7dce8]">گرافیک</div>
          </div>
          <div className="flex items-center justify-between my-2 text-[#aaa]">
            <h5>سوابق شغلی</h5>
            <span>
              <RiIcon.RiQuillPenLine size={23} />
            </span>
          </div>
          <div className="my-2 text-right">
            <p className="text-sm opacity-90 my-1">. طراح وبسایت</p>
            <p className="text-sm opacity-90">. طراح وبسایت</p>
          </div>
          <div className="flex items-center justify-between my-2 text-[#aaa]">
            <h5>مدارک تحصیلی</h5>
            <span>
              <RiIcon.RiQuillPenLine size={23} />
            </span>
          </div>
          <div className="my-2 text-right">
            <p className="text-sm opacity-90">. لیسانس حسابداری - دانشگاه چمران</p>
          </div>
        </div>
        <div className="">ali</div>
      </div>
    </main>
  );
};

export default Dashboard;
