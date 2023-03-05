import React from "react";
import Chart from "react-apexcharts";
import { ThemeContext } from "../context/ThemeContext";

const Card = ({ title, percentage, donutColor }) => {
  const { theme } = ThemeContext();
  const donutRemained = theme === "dark" ? "#080E21" : "#f1f5f9";

  const options = {
    series: [percentage, 100 - percentage],
    labels: ["Intensity"],
    colors: [donutColor, donutRemained],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
    stroke: {
      colors: ["transparent"],
    },
  };

  const series = [45, 55];

  return (
    <div className="relative -z-20 card-space grid grid-cols-1 md:grid-cols-2 items-center component-gap bg-secondary dark:bg-dark-secondary border-2 border-tirtiary dark:border-dark-tirtiary rounded">
      <div className="space-y-3 md:space-y-6 text-center md:text-start order-2 md:order-1">
        <div className="space-y-2">
          <h3 className="text-xl text-dominant dark:text-dark-dominant font-semibold">
            {title}
          </h3>
          <hr
            style={{ backgroundColor: donutColor }}
            className={`w-24 h-[2px] mx-auto md:mx-0 border-0`}
          />
        </div>
        <div>
          <h2 className="text-2xl text-dominant dark:text-dark-dominant font-bold">
            {percentage + "%"}
          </h2>
        </div>
      </div>
      <div className="relative flex justify-center md:justify-center order-1 md:order-2 -z-10">
        <Chart
          options={options}
          series={series}
          type="donut"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Card;
