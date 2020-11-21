import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MovieDetail from "./moviedetail/MovieDetail";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <MovieDetail />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
