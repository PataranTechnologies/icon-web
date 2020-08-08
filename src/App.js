import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./shared/Navigation/Navigation";
import IconPacks from "./routes/IconPacks/IconPacks";
import IllustrationSearch from "./routes/IllustrationSearch/IllustrationSearch";
import CustomIcons from "./routes/CustomIcons/CustomIcons";
import IconSearch from "./routes/IconSearch/IconSearch";

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
          <IllustrationSearch />
        </Route>
        <Route path="/custom-icons">
          <CustomIcons />
        </Route>
        <Route path="/icon-search">
          <IconSearch />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
