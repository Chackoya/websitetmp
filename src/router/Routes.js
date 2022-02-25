import React from "react";

import HomeLight from "../views/all-home-version/HomeLight";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeLight} ></Route>

        </Switch>

      </Router>
    </>
  );
};

export default Routes;
