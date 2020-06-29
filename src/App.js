import React from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

export default (App) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
};
