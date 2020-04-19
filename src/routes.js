import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import About from "./components/About";
import Sentiment from "./components/Sentiment";
import Compare from "./components/Sentiment/Compare";
import NotFound from "./components/NotFound";

const Routes = () => (
  <Switch>
    <Route path="/antares/" exact component={Home} />
    <Route path="/antares/terms" exact component={Terms} />
    <Route path="/antares/privacy" exact component={Privacy} />
    <Route path="/antares/about" exact component={About} />
    <Route
      path="/antares/sentiment-analysis/:text"
      exact
      component={Sentiment}
    />
    <Route path="/antares/compare/:a/:b" exact component={Compare} />
    <Route path="/antares/compare" exact component={Compare} />
    <Route path="/antares/*" component={NotFound} />
  </Switch>
);

export default Routes;
