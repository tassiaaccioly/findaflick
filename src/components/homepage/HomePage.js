import React, { useState } from "react";

import SearchBarMovies from "../searchbarmovies/SearchBarMovies";
import SearchBarSeries from "../searchbarseries/SearchBarSeries";

import "./HomePage.css";

function HomePage(props) {
  const [movies, setMovies] = useState({
    clickMovies: false,
  });

  const [series, setSeries] = useState({
    clickSeries: false,
  });

  function handleClickMovies() {
    setMovies({
      ...movies,
      clickMovies: !movies.clickMovies,
    });
  }

  function handleClickSeries() {
    setSeries({
      ...series,
      clickSeries: !series.clickSeries,
    });
  }

  return (
    <div className="homepage-container">
      <h1>Find a Flick</h1>
      <p>What flick do you wanna find today?</p>
      <div className="switch-searchbar">
        {movies.clickMovies ? (
          <SearchBarMovies
            searchMovie={props.searchMovie}
            setSearchMovie={props.setSearchMovie}
          />
        ) : series.clickSeries ? (
          <SearchBarSeries />
        ) : (
          <div className="mainBtn-container">
            <button className="mainBtn" onClick={handleClickSeries}>
              Series
            </button>
            <button className="mainBtn" onClick={handleClickMovies}>
              Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
