import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Header from "./Header";
import VerticalLayout from "./VerticalLayout";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <VerticalLayout />
        <Routes>
          <Route path="/:env/:id" element={<Dashboard />} />
          <Route path="/" element={<Navigation />} />
        </Routes>
      </div>
    </Router>
  );
}
