import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Nutrition } from '../../types/recipe';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const NutritionInfo: React.FC<{ nutrition: Nutrition }> = ({ nutrition }) => {
  const parseValue = (value: string): number => parseFloat(value) || 0;

  // チャートのデータ設定
  const data = {
    labels: ['タンパク質', '脂肪', '炭水化物', 'ビタミン', 'ミネラル'],
    datasets: [
      {
        label: '栄養情報',
        data: [
          parseValue(nutrition.protein),
          parseValue(nutrition.fat),
          parseValue(nutrition.carbohydrates),
          nutrition.vitamins.length,
          nutrition.minerals.length,
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  // チャートのオプション設定
  const options = {
    scales: {
      r: {
        beginAtZero: true,
        suggestedMax: 10,
        pointLabels: {
          font: {
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <div className="w-2 h-8 bg-black mr-4"></div>
        <h2 className="text-2xl font-bold text-gray-900">栄養情報</h2>
      </div>

      <div className="w-full lg:w-1/2 mx-auto"> 
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default NutritionInfo;
