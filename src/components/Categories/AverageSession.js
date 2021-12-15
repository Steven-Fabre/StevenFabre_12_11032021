/**
 * Average Session chart
 * Rendering component
 */

import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../../styles/Categories/AverageSession.css";
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

AverageSession.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function AverageSession({ data }) {
  const [Averagedata, setAverageData] = useState({});
  const [perc, setPerc] = useState(100);

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    else return setAverageData(data.data);
  }, [data]);

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return <p className="custom-tooltip-line">{payload[0].value} min</p>;
    }
    return null;
  }

  const onMouseMove = (hoveredData) => {
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.activePayload[0].payload.day;
      const index = Averagedata.sessions.findIndex((d) => d.day === hoveredX);
      const percentage = Math.round(
        ((Averagedata.sessions.length - index - 1) * 100) / (Averagedata.sessions.length - 1)
      );
      setPerc(100 - percentage);
    }
  };

  const onMouseOut = () => {
    setPerc(100);
  };

  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  return (
    <section
      style={{ background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${perc}%, #B80202 ${perc}%, #B80202 100%)` }}
      className="line-container"
    >
      <div className="line-title">Durée moyenne des sessions</div>
      <div className="weekdays">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{ top: 0, left: 0, right: 0, bottom: 20 }}
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
          data={Averagedata.sessions}
        >
          <Line
            activeDot={{
              stroke: "white",
              strokeOpacity: 0.2,
              fill: "white",
              strokeWidth: 13,
              r: 5,
            }}
            strokeWidth={2}
            type="monotone"
            stroke="white"
            dot={false}
            dataKey="sessionLength"
          />
          <XAxis stroke="white" dataKey="day" tick={false} tickLine={false} axisLine={false} />
          <YAxis
            hide={true}
            domain={["dataMin-30", "dataMax+40"]}
            tickLine={false}
            axisLine={false}
            tickCount={0}
            padding={{ top: 0, bottom: -20 }}
          />
          <Tooltip
            cursor={{
              stroke: "black",
              strokeOpacity: 0.01,
              strokeWidth: 50,
            }}
            content={<CustomTooltip />}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
