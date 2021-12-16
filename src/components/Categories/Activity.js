/**
 * Activity chart
 * Rendering component
 * @param {object} data - User's data fetched from external service
 */

import React, { useState, useEffect } from "react";
import "../../styles/Categories/Activity.css";
import { BarChart, CartesianGrid, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

Activity.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function Activity({ data }) {
  const [ActivityData, setActivityData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    return setActivityData(data.data);
  }, [data]);

  const formatXAxis = (tickItem) => {
    return tickItem + 1;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  return (
    <section className="activity-container">
      <div className="activity-title">Activité quotidienne</div>
      <div className="activity-circles">
        <div className="activity-label">
          <div className="activity-circle_black"></div>
          <p>Poids (kg)</p>
        </div>
        <div className="activity-label">
          <div className=" activity-circle_red"></div>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={ActivityData.sessions}
          margin={{
            top: 100,
            right: 25,
            left: 25,
            bottom: 25,
          }}
          barCategoryGap="30%"
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} stroke="#dedede" />
          <XAxis
            tickFormatter={formatXAxis}
            tick={{ fill: "#9b9eac" }}
            tickLine={false}
            stroke="#dedede"
            padding={{ left: -47, right: -47 }}
            tickSize="25"
          />
          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin-10", "dataMax+2"]}
            axisLine={false}
            tickLine={false}
            tickSize="50"
          />
          <Tooltip
            position={{ y: 40 }}
            cursor={{
              fill: "#C4C4C4",
              fillOpacity: "0.5",
            }}
            content={<CustomTooltip />}
          />

          <Bar yAxisId="right" dataKey="kilogram" fill="black" radius={[50, 50, 0, 0]} maxBarSize={12} />
          <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} maxBarSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
