/**
 * Main App
 */
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Authenticator from "./containers/Authenticator";
// css
import Login from "./containers/Login";

// app component
import Main from "./containers/Main";
import Auth from "./auth/Auth";
// const store = configureStore()
// window.store = store
function requireAuth() {
  const auth = new Auth();
  if (auth.isAuthenticated()) { //removed ! for ignoring login for now
    return <Redirect to="/login" />;
  } else {
    return <Main />;
  }
}

const MainApp = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/#/slash/:slash"
        name="main"
        component={Authenticator}
      />
      <Route exact path="/slash/:slash" name="main" component={Authenticator} />
      <Route exact path="/login" component={Login} />
      <Route path="/" name="main" render={requireAuth} />
    </Switch>
  </Router>
);

export default MainApp;
