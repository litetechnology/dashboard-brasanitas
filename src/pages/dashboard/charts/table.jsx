import React from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../../../components/loading';

const Table = ({ data }) => {
  const options = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" },
    pageSize: 30,
    theme: 'material',
    backgroundColor: '#363636',
    titleTextStyle: { color: '#ffffff' },
    headerColor: '#ffffff',
    alternatingRowStyle: false,
  };

  return (
    <Chart
      chartType="Table"
      width="40vw"
      height="400px"
      data={data}
      options={options}
      loader={<Loading />}
    />
  );
};

export default Table;
