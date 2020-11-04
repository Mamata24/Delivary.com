import React from "react";
import "./App.css";
import Home from "./LandingPage/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./LandingPage/NavBar";
import { Switch } from "@material-ui/core";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <NavBar /> */}
      {/* <Switch>
        <Route path="/office" component={NavBar} />
      </Switch> */}
      <Dashboard />
    </div>
  );
}

export default App;
