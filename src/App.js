import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./shared/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
