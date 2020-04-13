import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import About from "./components/About";
import Sentiment from "./components/Sentiment";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/terms" component={Terms} />
    <Route path="/privacy" component={Privacy} />
    <Route path="/about" component={About} />
    <Route path="/sentiment" component={Sentiment} />
  </Switch>
);

export default Routes;
