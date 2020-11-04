import React from "react";
import "./App.css";
import Home from "./LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard/Dashboard";
import { Route } from "react-router-dom";
import Office from "./LandingPage/Office";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/office" component={Office} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
