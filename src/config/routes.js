import React from "react";
import { Switch, Route } from "react-router-dom";

// import Home from "../pages/Home";
import Login from "../pages/Login";
// import Profile from "../pages/Profile";
// import Register from "../pages/Register";

const Routes = (props) => (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route
      path="/login"
      render={(routeProps) => {
        return (
          <Login
            {...routeProps}
            currentUser={props.currentUser}
            storeUser={props.storeUser}
          />
        );
      }}
    />
    {/* <Route path="/register" component={Register} /> */}
    {/* <Route path="/profile" component={Profile} /> */}
  </Switch>
);

export default Routes;
