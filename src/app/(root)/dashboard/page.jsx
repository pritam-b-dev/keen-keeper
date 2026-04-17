"use client";
import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

import { useHistory } from "@/context/HistoryContext";

const Dashboard = () => {
  const { history } = useHistory();

  const chartData = [
    {
      name: "Call",
      value: history.filter((item) => item.type === "Call").length,
      color: "#244D3F",
    },
    {
      name: "Video",
      value: history.filter((item) => item.type === "Video").length,
      color: "#37A163",
    },
    {
      name: "Text",
      value: history.filter((item) => item.type === "Text").length,
      color: "#7E35E1",
    },
  ];
  const total = chartData.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="container mx-auto p-3 bg-gray-50 ">
      <h1 className="font-bold text-4xl">Friendship Analytics</h1>
      <div className="bg-white rounded-lg p-4 mt-5">
        <h1>By Interaction Type</h1>
        <div className="flex flex-col items-center justify-center w-full p-4">
          {total === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <p className="text-5xl mb-4">📭</p>
              <p className="font-medium">No interactions yet</p>
              <p className="text-sm mt-1">
                Call, Text or Video a friend to see stats
              </p>
            </div>
          ) : (
            <PieChart width={350} height={350}>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="90%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="10%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={8}
                dataKey="value"
                isAnimationActive={true}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
