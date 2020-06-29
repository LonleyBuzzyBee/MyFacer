import React from "react";

function Dashboard(){
  return (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="home">
          <h5>Home</h5>
        </div>
        <div className="notifications">
          <h5>Notifications</h5>
        </div>
        <div className="messages">
          <h5>Messages</h5>
        </div>
      </div>
      <input className="Search" placeholder="Search"></input>
      <input className="Tweet" placeholder="Tweet"></input>
    </div>
  );
}

export default Dashboard;