import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import AddUser from "./components/AddUser";
//import User from "./components/User";
import ToolsList from "./components/ToolsList";

function App() {
  return (
    <Router>
      <div className="container mt-3 col-md-8">
          <h3>VUTTR</h3>
          <p>Very Useful Tools to Remember</p>
        <div>
          <Switch>
            <Route exact path={["/", "/tools"]} component={ToolsList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
