import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MovieDetail from "./moviedetail/MovieDetail";
import MoviesList from "./movieslist/MoviesList";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/movies/page:num" component={MoviesList} />
          <Route exact path="/movies/:id" component={MovieDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
