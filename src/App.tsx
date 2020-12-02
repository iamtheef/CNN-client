import React from "react";
import { Background } from "./Components/Background";
import { TypingEffect } from "./Components/TypingEffect";
import { MainRoom } from "./Components/MainRoom";
import { Switch, HashRouter, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Info = loadable(() => import("./Components/Info"));
const Egg = loadable(() => import("./Components/Egg"));

function App() {
  return (
    <div className="App">
      <Background />
      <TypingEffect />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={MainRoom} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/easter" component={Egg} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
