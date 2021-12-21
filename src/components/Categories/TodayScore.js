/**
 * Today Score chart
 * Rendering component
 * @param {object} data - User's data fetched from external service
 */

import React, { useEffect, useState } from "react";
import "../../styles/Categories/TodayScore.css";
import Loader from "../Loader";
import Error from "../Error";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

TodayScore.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function TodayScore({ data }) {
  const [TodayScoreData, setTodayScoreData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setTodayScoreData(data.data);
  }, [data]);

  if (data.isLoading) return <Loader />;
  const scoreData = TodayScoreData.todayScore ? TodayScoreData.todayScore : TodayScoreData.score;
  const score = [
    { name: "completed", value: scoreData * 100 },
    { name: "toDo", value: 100 - scoreData * 100 },
  ];

  if (data.error) return <Error />;
  return (
    <section className="todayscore-container">
      <div className="todayscore-title">Score</div>
      <div className="todayscore-score">
        <p className="todayscore-score-number">{scoreData * 100}%</p>
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
