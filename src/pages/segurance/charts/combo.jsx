import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Combo = ({ activitiesData }) => {
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({
    title: "Monthly Activities by Type",
    vAxis: { title: "Count" },
    hAxis: { title: "Month" },
    seriesType: "bars",
    series: { 1: { type: "line" } },
    theme: "dark_mode", // Configuração do tema escuro
  });

  useEffect(() => {
    if (activitiesData.length > 0) {
      const chartData = [
        ["Month", "Inside Schedule", "Outside Schedule"],
        ...activitiesData.map(({ month, insideSchedule, outsideSchedule }) => [
          month,
          insideSchedule,
          outsideSchedule,
        ]),
      ];
      setData(chartData);
    }
  }, [activitiesData]);

  return (
    <Chart chartType="ComboChart" width="100%" height="400px" data={data} options={options} />
  );
};

export default Combo;
