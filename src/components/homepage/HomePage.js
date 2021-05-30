import React, { useState } from "react";

import SearchBar from "../searchbar/SearchBar";

import "./HomePage.css";

function HomePage(props) {
  const {
    searchMovie,
    searchSeries,
    setSearchSeries,
    setSearchMovie,
    history,
  } = props;

  const [isMovies, setIsMovies] = useState(false);

  const [isSeries, setIsSeries] = useState(false);

  function handleClickMovies() {
    setIsMovies(!isMovies);
  }

  function handleClickSeries() {
    setIsSeries(!isSeries);
  }

  return (
    <div className="homepage-container">
      <h1>Find a Flick</h1>
      <p>Which flick do you wanna find today?</p>
      <div className="switch-searchbar">
        {isMovies ? (
          <SearchBar
            searchMovie={searchMovie}
            setSearchMovie={setSearchMovie}
            history={history}
            search="movie"
          />
        ) : isSeries ? (
          <SearchBar
            searchSeries={searchSeries}
            setSearchSeries={setSearchSeries}
            history={history}
            search="series"
          />
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
