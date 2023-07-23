import Container from "./../container/Container";
import * as RiIcon from "react-icons/ri";

const Support = () => {
  return (
    <Container>
      <section className="flex-1 h-screen overflow-y-auto">
        <div className="w-[95%] mx-auto text-center pt-6">
          <div className="flex items-center gap-x-3 pb-3 border-b border-gray-300">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#252525]">پشتیبانی</h3>
            <span className="bg-blue-600 p-[2px] shadow-md text-white rounded cursor-pointer">
              <RiIcon.RiAddLine size={22} />
            </span>
          </div>
          <div className="py-5">
            
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Support;
