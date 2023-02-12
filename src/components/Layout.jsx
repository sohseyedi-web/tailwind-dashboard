import Dashboard from "./layout/Dashboard";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <section className="flex">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default Layout;
