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

export default function Dashboard() {
  const { env, id } = useParams();
  const userData = GetData(env, id, "user");
  const averageData = GetData(env, id, "average");
  const activityData = GetData(env, id, "activity");
  const performanceData = GetData(env, id, "performance");

  return (
    <div className="dashboard">
      {userData.isLoading ? <Loader /> : <Welcome data={userData.data} />}
      <Activity data={activityData} />
      <AverageSession data={averageData} />
      <Performance data={performanceData.data} />
      {userData.isLoading ? <Loader /> : <EatingCount data={userData.data.keyData} />}
    </div>
  );
}
