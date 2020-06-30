import React from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Newsfeed from "./Newsfeed";
import Recommendations from "./Recommendations";
// import Recommendations from "./Recommendations";

function App(){
  return ( 
    <React.Fragment>
      <Dashboard />
      <hr/>
      <div className="parent-wrapper">
        <div className="profile-wrapper">
          <Profile />
        </div>
        <div className="newsfeed-wrapper">
          <Newsfeed />
        </div>
        <div className="rec-wrapper">
          <Recommendations />
          
        </div>
      </div>
    </React.Fragment>
   
  );
}

export default App;
