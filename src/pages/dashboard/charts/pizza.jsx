import React from 'react';
import { Chart } from 'react-google-charts';

const Pizza = ({name, data}) => {

    const shuffleColors = (colors) => {
        const shuffledColors = [...colors];
      
        for (let i = shuffledColors.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
        }
      
        return shuffledColors;
      };

  const options = {
    title: name,
    pieHole: 0.4,
    backgroundColor: '#363636', // Background color for the chart
    legend: { textStyle: { color: '#ecf0f1' } }, // Legend text color
    titleTextStyle: { color: '#ecf0f1' }, // Title text color
    slices: [
      { color: '#F37021' },
      { color: '#8fc9f1' },
      { color: '#f288e9' },
      { color: '#71c39f' },
      { color: '#9b59b6' },
    ],
  };

  return (
    <Chart
      width={'40vw'}
      height={'300px'}
      chartType="PieChart"
      loader={<div>Carregando...</div>}
      data={data}
      options={options}
    />
  );
};

export default Pizza;
