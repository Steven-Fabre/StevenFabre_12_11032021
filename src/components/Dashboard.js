/**
 * @function - Creating the dashboard using external service for fetch Data
 * @param {number} id - ID of the user given by the URL
 * @author Steven Fabre <stevenfabrepro@gmail.com>
 */

import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import Activity from "./Categories/Activity";
import AverageSession from "./Categories/AverageSession";
import Performance from "./Categories/Performance";
import Loader from "./Loader";
import Welcome from "./Categories/Welcome";
import EatingCount from "./Categories/EatingCount";
import TodayScore from "./Categories/TodayScore";
import Error from "./Error";
import GetData from "../services/GetData";

export default function Dashboard() {
  const { id } = useParams();
  const userData = GetData(id, "user");
  const averageData = GetData(id, "average");
  const activityData = GetData(id, "activity");
  const performanceData = GetData(id, "performance");

  if (userData.isLoading) return <Loader />;
  if (userData.error) return <Error />;

  return (
    <main className="dashboard">
      <div className="dashboard-main">
        <Welcome data={userData} />
        <Activity data={activityData} />
        <div className="dashboard-lower">
          <AverageSession data={averageData} />
          <Performance data={performanceData} />
          <TodayScore data={userData} />
        </div>
      </div>
      <aside>
        <EatingCount data={userData} />
      </aside>
    </main>
  );
}
