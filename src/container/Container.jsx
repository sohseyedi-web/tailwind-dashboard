import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <section className="flex">
        <Sidebar />
        {children}
      </section>
    </>
  );
};

export default Container;
