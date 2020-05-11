import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import Home from "./App/Views/Home/Home";
import About from "./App/Views/About/About";
import Resume from "./App/Views/Resume/Resume";
import Projects from "./App/Views/Projects/Projects";
import Contact from "./App/Views/Contact/Contact";
import NotFound from "./App/Views/NotFound/NotFound";
import Research from "./App/Views/Research/Research";


function App() {
  return (
    <div className="App">
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

export default App;
