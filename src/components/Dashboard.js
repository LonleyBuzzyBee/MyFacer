import React from "react";

function Dashboard(){
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="home"><h2>Home</h2></div>
        <div className="notifications"><h2>Notifications</h2></div>
        <div className="messages"><h2>Messages</h2></div>
      </div>
      <input className="Search" placeholder="Search"></input>
      <input className="Tweet" placeholder="Tweet"></input>
    </div>
  );
}

export default Dashboard;