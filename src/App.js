import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import VerticalLayout from "./components/VerticalLayout";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <VerticalLayout />
          <Routes>
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/" element={<Navigation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
