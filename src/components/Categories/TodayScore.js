import React, { useEffect, useState } from "react";
import "../../styles/Categories/TodayScore.css";
import Loader from "../Loader";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function TodayScore({ data }) {
  const [TodayScoreData, setTodayScoreData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    return setTodayScoreData(data.data);
  }, [data]);

  if (data.isLoading) return <Loader />;
  const score = [
    { name: "completed", value: TodayScoreData.todayScore * 100 },
    { name: "toDo", value: 100 - TodayScoreData.todayScore * 100 },
  ];
  return (
    <section className="todayscore-container">
      <div className="todayscore-title">Score</div>
      <div className="todayscore-score">
        <p className="todayscore-score-number">{TodayScoreData.todayScore * 100}%</p>
        <p className="todayscore-score-label">de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={score}
            fill="#FF0000"
            innerRadius={68}
            outerRadius={80}
            startAngle={80}
            endAngle={480}
          >
            {score.map((entry, index) => (
              <Cell key={`cell-${index}`} cornerRadius="50%" fill={index === 0 ? "#FF0000" : "none"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
}
