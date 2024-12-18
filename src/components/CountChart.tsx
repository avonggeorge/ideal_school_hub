"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: 'Boys', value: 400 },
  { name: 'Girls', value: 300 },
];


const COLORS = ['#90D5FF', '#F8D0D2'];

const RADIAN = Math.PI / 180;

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}
const renderCustomizedLabel = ({ 
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index 
}: CustomLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
    x={x}
    y={y}
    fill="white"
    textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central"
    fontSize={20}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
         <FontAwesomeIcon icon={faEllipsis} color="808080"/>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-colorBlueLight rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-slate-600">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-colorPink rounded-full" />
          <h1 className="font-bold">1,544</h1>
          <h2 className="text-xs text-slate-600">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;