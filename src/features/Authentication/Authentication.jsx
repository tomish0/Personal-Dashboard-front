import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "../../css/Authentication.css";

function Authentication() {
  return (
      <div className="authentication-container">
        <h1>Dashboard</h1>
        <Switch>
          <Route exact path="/Sign-Up" component={SignUp} />
          <Route exact path="/Login" component={Login} />
          <Route exact path=":a(.+)">
            <Redirect to="/Login" />
          </Route>
        </Switch>
      </div>
  );
}

export default Authentication;
