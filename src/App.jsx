import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from './components/Home';
import Sponsor from './components/Sponsor';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sponsors/:sponsorId">
            <Sponsor />
          </Route>
          <Route path="/sponsors/">
            <Redirect to="/" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
