import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Card } from '@shopify/polaris';

// Registering the required elements for Chart.js
ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const data = {
    labels: ['Exception', 'Intransit', 'Pending', 'Delivered', 'Out for delivery'],
    datasets: [
      {
        data: [40, 30, 20, 10, 50], // Adjust the data as per your requirement
        backgroundColor: ['#5C4326', '#AA8508', '#E8A206', '#FBD8A0', '#F7E7C3'],
       
      },
    ],
  };

  const options = {
    cutout: '40%', 
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true, 
      },
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{ margin:'0 auto 0 auto' ,width: 'auto', height: '200px', alignContent:"center",  }}>
          <Pie data={data} options={options} />
        </div>
        <div style={{ marginTop: '20px', alignItems:'start', marginRight:'150px'}}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', overflow:"auto"}}>
            <LegendItem color="#5C4326" label="Exception" />
            <LegendItem color="#AA8508" label="Intransit" />
            <LegendItem color="#E8A206" label="Pending" />
            <LegendItem color="#FBD8A0" label="Delivered" />
            <LegendItem color="#F7E7C3" label="Out for delivery" />
          </div>
        </div>
      </div>
    </div>
  );
};

// A simple component for each legend item
const LegendItem = ({ color, label }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div
        style={{
          backgroundColor: color,
          width: '15px',
          height: '15px',
          marginRight: '8px',
          borderRadius: '50%',
        }}
      ></div>
      <span style={{ fontSize: '14px' }}>{label}</span>
    </div>
  );
};

export default PieChart;
