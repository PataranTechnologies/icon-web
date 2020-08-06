import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./shared/Navigation/Navigation";
import IconPacks from "./routes/IconPacks/IconPacks";
import Illustrations from "./routes/Illustrations/Illustrations";
import CustomIcons from "./routes/CustomIcons/CustomIcons";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/icon-packs">
          <IconPacks />
        </Route>
        <Route path="/illustrations">
          <Illustrations />
        </Route>
        <Route path="/custom-icons">
          <CustomIcons />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
