import Container from "../container/Container";
import * as RiIcon from "react-icons/ri";
import Profile from "../assets/123.jpg";
import Cover from "../assets/Crypto.jpg";

const Dashboard = () => {
  return (
    <Container>
      <section className="flex-1 h-screen overflow-y-auto">
        <main className="text-center w-[95%] mx-auto pt-6 ">
          <div className="flex px-2 lg:flex-row flex-col">
            <div className="lg:w-[22%] w-full mb-5 h-[40%] bg-white shadow-sm rounded-xl px-2 border-solid border-2 border-[#d7dce8]">
              <div className="flex items-center justify-between py-2 text-[#aaa]">
                <h5>اطلاعات شناسایی</h5>
                <span>
                  <RiIcon.RiQuillPenLine size={23} />
                </span>
              </div>
              <div className="my-2 flex items-center flex-col">
                <img
                  src={Profile}
                  alt=""
                  className="w-20 h-20 rounded-full border-2 border-solid border-[#1a5cff]"
                />
                <p className="my-2 text-[#1a5cff] font-bold">سهیل سیدی</p>
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
              <div className="flex items-center justify-between my-2 text-[#aaa]">
                <h5>مهارت ها</h5>
                <span>
                  <RiIcon.RiQuillPenLine size={23} />
                </span>
              </div>
              <div className="flex items-center  flex-wrap">
                <div className="rounded  py-1 my-2 px-2 bg-[#d7dce8]">
                  طراحی سایت
                </div>
                <div className="rounded mx-4  py-1 px-2 bg-[#d7dce8]">
                  تجریه کاربری
                </div>
                <div className="rounded  py-1 my-2 px-2 bg-[#d7dce8]">
                  گرافیک
                </div>
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
                <p className="text-sm opacity-90">
                  . لیسانس حسابداری - دانشگاه چمران
                </p>
              </div>
            </div>
            <div className="lg:w-[76%] w-full lg:mr-4 mr-0">
              <div className="flex items-center justify-between mb-2">
                <h5 className="opacity-90">آثار من :</h5>
                <div className="w-7 h-7 rounded cursor-pointer bg-white flex items-center justify-center border-solid border-2 border-[#d7dce8]">
                  <RiIcon.RiArrowUpDownLine />
                </div>
              </div>
              <div className="w-full my-3 rounded-xl bg-white shadow-md py-3 px-4">
                <div className="flex  justify-start items-start mb-2">
                  <div className="text-[#1a5cff]">دوره های آموزشی</div>
                  <span className="mx-3">
                    <RiIcon.RiPencilFill size={20} />
                  </span>
                  <span className="text-red-600">
                    <RiIcon.RiDeleteBin5Line size={20} />
                  </span>
                </div>
                <div className="flex justify-start flex-wrap">
                  <div className="lg:w-[25%] w-[35%] ml-4  mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] w-[35%] ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] hidden ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full my-3 rounded-xl bg-white shadow-md py-3 px-4">
                <div className="flex  justify-start items-start mb-2">
                  <div className="text-[#1a5cff]">نمونه کار آنلاین</div>
                  <span className="mx-3">
                    <RiIcon.RiPencilFill size={20} />
                  </span>
                  <span className="text-red-600">
                    <RiIcon.RiDeleteBin5Line size={20} />
                  </span>
                </div>
                <div className="flex justify-start flex-wrap">
                  <div className="lg:w-[25%] w-[35%] ml-4  mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] w-[35%] ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] hidden ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full my-3 rounded-xl bg-white shadow-md py-3 px-4">
                <div className="flex  justify-start items-start mb-2">
                  <div className="text-[#1a5cff]">ظراحی و گرافیک</div>
                  <span className="mx-3">
                    <RiIcon.RiPencilFill size={20} />
                  </span>
                  <span className="text-red-600">
                    <RiIcon.RiDeleteBin5Line size={20} />
                  </span>
                </div>
                <div className="flex justify-start flex-wrap">
                  <div className="lg:w-[25%] w-[35%] ml-4  mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] w-[35%] ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] hidden ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-full my-3 rounded-xl bg-white shadow-md py-3 px-4">
                <div className="flex  justify-start items-start mb-2">
                  <div className="text-[#1a5cff]">ظراحی و گرافیک</div>
                  <span className="mx-3">
                    <RiIcon.RiPencilFill size={20} />
                  </span>
                  <span className="text-red-600">
                    <RiIcon.RiDeleteBin5Line size={20} />
                  </span>
                </div>
                <div className="flex justify-start flex-wrap">
                  <div className="lg:w-[25%] w-[35%] ml-4  mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] w-[35%] ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                  <div className="lg:w-[25%] hidden ml-4 mb-2 relative">
                    <img
                      src={Cover}
                      className="w-full object-cover h-[100px] rounded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-[20%] w-1/2 my-7 rounded-xl bg-white shadow-md py-3">
                <div className=" flex items-center justify-center">
                  <div className="text-[#1a5cff]">افزودن دسته بندی</div>
                  <span>
                    <RiIcon.RiAddFill size={20} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </Container>
  );
};

export default Dashboard;
