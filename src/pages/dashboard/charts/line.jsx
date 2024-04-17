import React from "react";
import { Chart } from "react-google-charts";
import Loading from "../../../components/loading";

const LineChart = ({ activitiesData, name }) => {
  const options = {
    title: name,
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <div>
      <Chart
        chartType="LineChart"
        width="80vw"
        height="400px"
        data={activitiesData}
        options={options}
      />
    </div>
  );
};

export default LineChart;
