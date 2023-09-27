import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonationInfo } from "../../Utility/localStorage";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#FF444A", "#00C49F"];

const Statistics = () => {
  const staticData = useLoaderData();
  const [staticObjData, setStaticObjData] = useState([]);

  useEffect(() => {
    const storedDonationId = getDonationInfo();

    if (staticData.length > 0) {
      const StaticDataObj = staticData.filter((data) =>
        storedDonationId.includes(data.id)
      );
      setStaticObjData(StaticDataObj);
    }
  }, [staticData]);

  const objectData = staticObjData.length;

  const sumOfPercentage = (objectData / 12) * 100;
  const remainingOfPercentage = 100 - sumOfPercentage;

  const pieChartData = [
    { name: "Sum of Percentage", value: sumOfPercentage },
    { name: "Remaining Percentage", value: remainingOfPercentage },
  ];

  return (
    <div>
      {/* Render the pie chart */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col pb-5 -mt-10 md:-m-0 md:flex-row justify-center items-center md:gap-3 ">
        <div>
          <p className="text-[#0B0B0B] font-normal text-lg">Total Donation</p>
        </div>
        <div className="w-16 rounded-sm h-2 bg-[#FF444A]"></div>
        <div>
          <p className="text-[#0B0B0B] font-normal text-lg">Your Donation</p>
        </div>
        <div className="w-16 rounded-sm h-2 bg-[#00C49F]"></div>
      </div>
    </div>
  );
};

export default Statistics;
