import React, { Profiler } from "react";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Newsfeed from "./Newsfeed";
// import Recommendations from "./Recommendations";

function App(){
  return ( 
    <React.Fragment>
      <Dashboard />
      <Profile />
      <Newsfeed/>
    </React.Fragment>
  );
}

export default App;
