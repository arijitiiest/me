import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./Root.css";
import Home from "./Views/Home/Home";
import About from "./Views/About/About";
import Resume from "./Views/Resume/Resume";
import Projects from "./Views/Projects/Projects";
import Contact from "./Views/Contact/Contact";
import NotFound from "./Views/NotFound/NotFound";
import Research from "./Views/Research/Research";

function Root() {
  return (
    <div className="Root">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} status={404} />
        </Switch>
      </Router>
    </div>
  );
}

export default Root;
