import HeaderDashboard from "./dashboard/HeaderDashboard";
import ChartLayout from "./dashboard/ChartLayout";
const Dashboard = () => {
  return (
    <section className="flex-1 h-screen overflow-y-auto container">
      <div className="w-[95%] mx-auto pt-6 pb-12">
        <h3 className="title">داشبورد</h3>
        <HeaderDashboard />
        <ChartLayout />
      </div>
    </section>
  );
};

export default Dashboard;
