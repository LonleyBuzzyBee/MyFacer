import React from "react";

function Dashboard(){
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div><h2>Home</h2></div>
        <div><h2>Notifications</h2></div>
        <div><h2>Messages</h2></div>
      </div>
      <input className="Search" placeholder="Search"></input>
      <input className="Tweet" placeholder="Tweet"></input>
    </div>
  );
}

export default Dashboard;