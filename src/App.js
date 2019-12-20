import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/*  <Route path="/characters"></Route> */}
        <Route path="/">
          <WelcomePage />
          <CharacterList />
        </Route>
      </Switch>
    </div>
  );
}
