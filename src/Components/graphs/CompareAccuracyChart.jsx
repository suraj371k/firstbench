import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { slot: "1", accuracy: 85 },
  { slot: "2", accuracy: 45 },
  { slot: "3", accuracy: 30 },
  { slot: "4", accuracy: 55 },
  { slot: "5", accuracy: 52 },
  { slot: "6", accuracy: 48 },
  { slot: "7", accuracy: 58 },
];

export default function CompareAccuracyChart() {
  return (
    <div className="p-4 bg-white h-[400px] rounded-lg shadow-md border-2 border-[#d8d6d6] inline-block w-[640px]">
      <h3 className="text-lg font-bold text-[#a29f9f] mb-4">Compare Accuracy</h3>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="slot"
          label={{ value: "Slots", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{
            value: "Accuracy (%)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip />
        <Legend />
        <Bar  dataKey="accuracy" fill="#4F46E5" barSize={20} name="" />
      </BarChart>
    </div>
  );
}
