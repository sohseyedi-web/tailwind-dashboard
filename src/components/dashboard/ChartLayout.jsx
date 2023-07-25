import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChartData } from "./../../utils/charData";


const ChartLayout = () => {
  const [priceData, setPriceData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "فروش محصول",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  });
  const [userData, setUserData] = useState({
    labels: ChartData.map((data) => data.month),
    datasets: [
      {
        label: "امار افراد",
        data: ChartData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <div className="py-3">
        <div className="w-full shadow-md rounded-lg p-3 dark:bg-[#213555]">
          <h4 className="text-lg md:text-2xl font-semibold">
            آمار فروش محصولات
          </h4>
          <div className="lg:w-[800px] w-full mx-auto lg:mx-0">
            <Bar data={priceData} />
          </div>
        </div>
      </div>
      <div className="pt-3  pb-9">
        <div className="w-full shadow-md rounded-lg p-3 dark:bg-[#213555]">
          <h4 className="text-lg md:text-2xl font-semibold">
            آمار دنبال کنندگان
          </h4>
          <div className="lg:w-[800px] w-full mx-auto lg:mx-0 text-white">
            <Line data={userData} color={"rgba(75,192,192,1)"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartLayout;
