import Container from "./../container/Container";
import * as RiIcon from "react-icons/ri";

const Profile = () => {
  return (
    <Container>
      <section className="flex-1 h-screen overflow-y-auto">
        <div className="w-[95%] mx-auto pt-6">
          <h3 className="text-xl pb-3 border-b border-gray-300 lg:text-2xl font-semibold text-[#252525]">
            پروفایل
          </h3>

          <div className="py-5"></div>
        </div>
      </section>
    </Container>
  );
};

export default Profile;
