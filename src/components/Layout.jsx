import Dashboard from "./layout/Dashboard";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <section className="flex">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default Layout;
