import React from "react";
import "./dashboardToggle.scss";

function DashboardToggle(props) {
  const setDarkToggle = props.setDarkToggle;
  const darkToggle = props.darkToggle;

  const handleToggleClick = (event) => {
    setDarkToggle(!darkToggle);
    if (darkToggle == false) {
      document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div
      className={
        darkToggle
          ? `dashboard-container ${"dark-dashboard-container"}`
          : "dashboard-container"
      }
    >
      <div className='title-container'>
        <h2>Social Media Dashboard</h2>
        <h4>Total Followers: 23,004</h4>
      </div>
      <div className='toggle-container'>
        <h4>Dark Mode</h4>
        <label class='darkmode-switch'>
          <input
            type='checkbox'
            onClick={(event) => handleToggleClick(event)}
          />
          <span class='slider-round'></span>
        </label>
      </div>
    </div>
  );
}

export default DashboardToggle;
