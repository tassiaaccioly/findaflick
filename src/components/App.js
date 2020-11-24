import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import HomePage from "./homepage/HomePage";
import MovieDetail from "./moviedetail/MovieDetail";
import MoviesList from "./movieslist/MoviesList";
import SeriesList from "./serieslist/SeriesList";
import SeriesDetail from "./seriesdetail/SeriesDetail";
import TopRated from "./toprated/TopRated";
import TopMovies from "./topmovies/TopMovies";
import TopSeries from "./topseries/TopSeries";
import "./App.css";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchSeries, setSearchSeries] = useState("");

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
                searchSeries={searchSeries}
                setSearchSeries={setSearchSeries}
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
            <Route
              exact
              path="/series/page:num"
              render={(routeProps) => {
                return (
                  <SeriesList {...routeProps} searchSeries={searchSeries} />
                );
              }}
            />
            <Route exact path="/series/:id" component={SeriesDetail} />
            <Route exact path="/toprated" component={TopRated} />
            <Route
              exact
              path="/movies/toprated/page:num"
              component={TopMovies}
            />
            <Route
              exact
              path="/series/toprated/page:num"
              component={TopSeries}
            />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
