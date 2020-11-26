import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movieDetails/:id" component={MovieDetails} />
    </Switch>
  );
};

export default Router;
