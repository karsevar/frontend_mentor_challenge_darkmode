import React, { useState, useEffect } from "react";
import "./App.css";

import FollowerCards from "./components/followerCards/followerCards.js";
import DashboardToggle from "./components/dashboardToggle/dashboardToggle.js";
import ActivitySeparator from "./components/activitySeparator/activitySeparator.js";
import ActivityCards from "./components/activityCards/activityCards.js";

function App() {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <div className='App'>
      <div
        className={
          darkToggle
            ? `separator-theme dark-separator-theme`
            : "separator-theme"
        }
      ></div>
      <div
        className={
          darkToggle
            ? "separator-theme-bottom dark-App"
            : "separator-theme-bottom"
        }
      ></div>
      <div className='social-media-container'>
        {console.log("dark mode toggle", darkToggle)}
        <DashboardToggle
          setDarkToggle={setDarkToggle}
          darkToggle={darkToggle}
        />
        <FollowerCards darkToggle={darkToggle} />
        <ActivitySeparator darkToggle={darkToggle} />
        <ActivityCards darkToggle={darkToggle} />
      </div>
    </div>
  );
}

export default App;
