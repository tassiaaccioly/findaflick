import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import HomePage from "./homepage/HomePage";
import MovieDetail from "./moviedetail/MovieDetail";
import MoviesList from "./movieslist/MoviesList";
import SeriesList from "./serieslist/SeriesList";
import SeriesDetail from "./seriesdetail/SeriesDetail";
import "./App.css";

function App() {
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main style={{ marginTop: "70px" }}>
          <Switch>
            <Route exact path="/">
              <HomePage
                searchMovie={searchMovie}
                setSearchMovie={setSearchMovie}
              />
            </Route>
            <Route
              exact
              path="/movies/page:num"
              render={(routeProps) => {
                return <MoviesList {...routeProps} searchMovie={searchMovie} />;
              }}
            />
            <Route exact path="/movies/:id" component={MovieDetail} />
            <Route exact path="/series/page:num" component={SeriesList} />
            <Route exact path="/series/:id" component={SeriesDetail} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
