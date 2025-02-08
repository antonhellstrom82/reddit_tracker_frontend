import React, { useEffect, useState } from "react";
import axios from "axios";

const SubredditList = () => {
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    axios.get("https://reddit-tracker-jzk5.onrender.com/api/subreddits")
      .then(response => setSubreddits(response.data.subreddits))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Övervakade subreddits</h2>
      <ul>
        {subreddits.map((sub, index) => (
          <li key={index}>{sub}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubredditList;

