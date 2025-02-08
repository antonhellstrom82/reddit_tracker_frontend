import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Hem</Link></li>
        <li><Link to="/activity-chart">Aktivitetsgraf</Link></li>
        <li><Link to="/subreddits">Subreddits</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

