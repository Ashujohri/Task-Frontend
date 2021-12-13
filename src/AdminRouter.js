import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./component/SignIn";
import SignUpForm from "./component/SignUpForm";
import Dashboard from "./component/Dashboard";

export default function AdminRouter(props) {
  return (
    <>
      <Router>
        <Route
          exact
          strict
          component={SignIn}
          path="/"
          history={props.history}
        />
        <Route
          exact
          strict
          component={SignIn}
          path="/SignIn"
          history={props.history}
        />
        <Route
          exact
          strict
          component={SignUpForm}
          path="/SignUpForm"
          history={props.history}
        />
        <Route
          exact
          strict
          component={Dashboard}
          path="/Dashboard"
          history={props.history}
        />
      </Router>
    </>
  );
}
