import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js";
import EpisodeList from "./components/EpisodeList.js";
import { Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <Switch>
        <Route path="/episodes">
          <EpisodeList />
        </Route>
        <Route path="/locations">
          <LocationsList />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
      </Switch>
    </div>
  );
}
