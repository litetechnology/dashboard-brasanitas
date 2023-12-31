import React from 'react';
import { Chart } from 'react-google-charts';

const Barra = ({ data, name }) => {
  const options = {
    title: name,
    legend: { position: 'none' },
    bars: 'vertical',
    backgroundColor: '#363636', 
    titleTextStyle: { color: '#ecf0f1' },// Background color for the chart
    vAxis: {
      textStyle: { color: '#ecf0f1' }, // Vertical axis text color
      titleTextStyle: { color: '#ecf0f1' }, // Vertical axis title text color
    },
    hAxis: {
      title: 'Categorias',
      textStyle: { color: '#ecf0f1' }, // Horizontal axis text color
      titleTextStyle: { color: '#ecf0f1' }, // Horizontal axis title text color
    },
    chartArea: { backgroundColor: '#363636' }, // Chart area background color
  };

  return (
    <Chart
      width={'40vw'}
      height={'300px'}
      chartType="BarChart"
      loader={<div>Carregando...</div>}
      data={data}
      options={options}
    />
  );
};

export default Barra;
