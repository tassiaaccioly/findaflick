import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import HomePage from "./homepage/HomePage";
import MovieDetail from "./moviedetail/MovieDetail";
import MoviesList from "./movieslist/MoviesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main style={{ marginTop: "64px" }}>
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/movies/page:num" component={MoviesList} />
            <Route exact path="/movies/:id" component={MovieDetail} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
