import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollReload from "./ScrollReload";
import NavBar from "./navbar/NavBar";
import HomePage from "./homepage/HomePage";
import MovieDetail from "./movieComponents/moviedetail/MovieDetail";
import MoviesList from "./movieComponents/movieslist/MoviesList";
import SeriesList from "./seriesComponents/serieslist/SeriesList";
import SeriesDetail from "./seriesComponents/seriesdetail/SeriesDetail";
import TopRated from "./toprated/TopRated";
import TopMovies from "./topmovies/TopMovies";
import TopSeries from "./topseries/TopSeries";
import Recomendations from "./recomendations/Recomendations";
import About from "./about/About";
import "./App.css";

function App() {
  const [searchMovie, setSearchMovie] = useState("");
  const [searchSeries, setSearchSeries] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main style={{ marginTop: "70px" }}>
          <ScrollReload>
            <Switch>
              <Route
                exact
                path="/"
                render={(routeProps) => {
                  return (
                    <HomePage
                      {...routeProps}
                      searchMovie={searchMovie}
                      setSearchMovie={setSearchMovie}
                      searchSeries={searchSeries}
                      setSearchSeries={setSearchSeries}
                    />
                  );
                }}
              />
              <Route
                exact
                path="/movies/page:num"
                render={(routeProps) => {
                  return (
                    <MoviesList {...routeProps} searchMovie={searchMovie} />
                  );
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
              <Route path="/recomendations" component={Recomendations} />
              <Route path="/about" component={About} />
            </Switch>
          </ScrollReload>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
