import React from 'react';
import { Chart } from 'react-google-charts';
import Loading from '../../../components/loading';

const Combo = ({ activitiesData }) => {
  const options = {
    seriesType: "bars",
    title: name,

    slices: [
      { color: '#F37021' },
      { color: '#8fc9f1' },
      { color: '#f288e9' },
      { color: '#71c39f' },
      { color: '#9b59b6' },
    ],
  };

  return (
    <div>
<Chart
      chartType="ComboChart"
      width="80vw"
      height="400px"
      data={activitiesData}
      options={options}
    />
    </div>
  );
};

export default Combo;
