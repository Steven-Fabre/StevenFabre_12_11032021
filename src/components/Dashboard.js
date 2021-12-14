import React from "react";
import { useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import Activity from "./Categories/Activity";
import AverageSession from "./Categories/AverageSession";
import Performance from "./Categories/Performance";
import GetData from "../services/GetData";
import Loader from "./Loader";
import Welcome from "./Categories/Welcome";
import EatingCount from "./Categories/EatingCount";
import TodayScore from "./Categories/TodayScore";

export default function Dashboard() {
  const { env, id } = useParams();
  const userData = GetData(env, id, "user");
  const averageData = GetData(env, id, "average");
  const activityData = GetData(env, id, "activity");
  const performanceData = GetData(env, id, "performance");

  if (userData.isLoading) return <Loader />;

  return (
    <main className="dashboard">
      <div className="dashboard-main">
        <Welcome data={userData.data} />
        <Activity data={activityData} />
        <div className="dashboard-lower">
          <AverageSession data={averageData} />
          <Performance data={performanceData} />
          <TodayScore data={userData} />
        </div>
      </div>
      <aside>
        <EatingCount data={userData.data.keyData} />
      </aside>
    </main>
  );
}
