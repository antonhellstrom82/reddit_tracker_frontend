import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer } from "recharts";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const API_BASE = "https://reddit-tracker-jzk5.onrender.com/api";

export default function Dashboard() {
  const [subreddits, setSubreddits] = useState([]);
  const [status, setStatus] = useState({ reddit_api: "offline", data_points: {} });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/status`)
      .then((res) => res.json())
      .then((data) => setStatus(data));

    fetch(`${API_BASE}/fetch_users`)
      .then((res) => res.json())
      .then((data) => {
        setSubreddits(Object.keys(data));
      });

    fetch(`${API_BASE}/activity_chart`)
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reddit Activity Tracker</h1>
      <div className="flex space-x-4 items-center">
        <div className="flex items-center space-x-2">
          {status.reddit_api === "online" ? (
            <FaCheckCircle className="text-green-500" size={20} />
          ) : (
            <FaTimesCircle className="text-red-500" size={20} />
          )}
          <span>Reddit API: {status.reddit_api.toUpperCase()}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {subreddits.map((sub) => (
          <div key={sub} className="border rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-lg font-semibold">r/{sub}</h2>
            <p>Datapunkter: {status.data_points[sub] || 0}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Aktiva användare över tid</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <RechartsTooltip />
            {subreddits.map((sub) => (
              <Line key={sub} type="monotone" dataKey={sub} stroke="#8884d8" />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
