import React from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../../../components/loading';

const Pizza = ({name, data, onClick}) => {

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
    <div onClick={onClick}>
    
    <Chart
      width={'40vw'}
      height={'300px'}
      chartType="PieChart"
      loader={<Loading/>}
      data={data}
      options={options}
    />
    </div>
  );
};

export default Pizza;
