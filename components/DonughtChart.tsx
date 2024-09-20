"use client"

import  {Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const DonughtChart = ({ accounts }: DoughnutChartProps) => {
  const data ={
    datasets:[
      {
        lavel: "Banks",
        data: [1250, 2500, 3490],
        backgroundColor: ['#0747b6','#2265d8','#2f91fa']
      }
    ],

    labels:['Bank1','Bank2','Bank3']

  };
  
  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins: {
      legend:{
        display: false
      }
    }
  }}
  />
  
}

export default DonughtChart