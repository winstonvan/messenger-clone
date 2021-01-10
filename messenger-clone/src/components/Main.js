import React from "react";
import { Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/chat" component={Chat}></Route>
    </Switch>
  );
};

export default Main;
