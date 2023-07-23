import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </section>
  );
};

export default Layout;
