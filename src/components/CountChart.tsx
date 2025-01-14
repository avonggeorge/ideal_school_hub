"use client";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CountChart = ({ boys, girls }: { boys: number; girls: number }) => {
const data = [
  { name: "Boys", value: boys },
    { name: "Girls", value: girls },
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
    fontFamily="Arial, sans-serif"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
      <div className="relative w-full  h-96">
      // h-[75%]
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      </div>
  );
};

export default CountChart;