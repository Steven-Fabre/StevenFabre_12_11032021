/**
 * Performance chart
 * Rendering component
 * @param {object} data - User's data fetched from external service
 */

import React, { useEffect, useState } from "react";
import "../../styles/Categories/Performance.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import Loader from "../Loader";
import Error from "../Error";
import PropTypes from "prop-types";

Performance.propTypes = {
  data: PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    data: PropTypes.object,
  }).isRequired,
};

export default function Performance({ data }) {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    if (data.isLoading) return;
    if (data.error) return;
    let reversed = [...data.data.data].reverse();
    return setPerformanceData({ data: [...reversed], kind: data.data.kind });
  }, [data]);

  function traductKind(kind) {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return "";
    }
  }

  if (data.isLoading) return <Loader />;
  if (data.error) return <Error />;
  return (
    <section className="performance-container">
      <ResponsiveContainer className="containerRadar" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="70%" data={performanceData.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickLine={false} tickFormatter={(kind) => traductKind(kind)} stroke="white" />
          <Radar dataKey="value" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}
