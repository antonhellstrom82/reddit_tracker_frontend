import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ActivityChart from "./pages/ActivityChart";
import SubredditList from "./pages/SubredditList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity-chart" element={<ActivityChart />} />
        <Route path="/subreddits" element={<SubredditList />} />
      </Routes>
    </div>
  );
}

export default App;

