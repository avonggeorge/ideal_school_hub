"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer,
} from "recharts";


const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#F5FCF6" />
      <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
      </text>
    </g>
  );
};

const AttendanceChart = ({
  data,
}: {
  data: { name: string; present: number; absent: number }[];
}) => {
  return (
<ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3"
          vertical={false}
          />


          <XAxis dataKey="name"
          axisLine={false}
          tick={{ fill: "#d1d5db" }}
          tickLine={false}
          />
          <YAxis
          axisLine={false}
          tick={{ fill: "#d1d5db" }}
          tickLine={false}
          />
          <Tooltip
          contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend 
          align="left"
          verticalAlign="top"
          wrapperStyle={{
            paddingTop: "20px", 
            paddingBottom: "40px",
          }}
          payload={[
    {
      value: "Present",
      type: "circle",
      color: "#8884d8",
    },
    {
      value: "Absent",
      type: "circle",
      color: "#82ca9d",
    },
  ]}
  formatter={(value) => (
    <span style={{ color: "#475569", fontSize: "18px" }}>{value}</span>
  )}
          />
          <Bar dataKey="present" fill="#CEF0D1"
          minPointSize={5}
          legendType="circle"
          radius={[10, 10, 0, 0]}>
          <LabelList dataKey="present" content={renderCustomizedLabel}
          />
          </Bar>

          <Bar 
          dataKey="absent" fill="#FFE7E9"
          minPointSize={10}
          legendType="circle"
          radius={[10, 10, 0, 0]}
          />
          <LabelList dataKey="absent" content={renderCustomizedLabel} />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default AttendanceChart;