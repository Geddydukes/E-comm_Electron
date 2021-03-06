import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Inventory from "../pages/Inventory";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
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
    <Route path="/register" component={Register} />
    <Route path="/inventory" component={Inventory} />
    <Route path="/new" component={AddProduct} />
    <Route path="/:id/edit" component={EditProduct} />
    {/* <Route path="/profile" component={Profile} /> */}
  </Switch>
);

export default Routes;
