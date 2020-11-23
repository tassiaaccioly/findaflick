import React, { useState } from "react";

import SearchBarMovies from "../searchbarmovies/SearchBarMovies";
import SearchBarSeries from "../searchbarseries/SearchBarSeries";

function HomePage() {
  const [state, setState] = useState({
    clickMovies: false,
    clickSeries: false,
  });

  function handleClick(event) {
    setState({
      ...state,
      [event.currentTarget.name]: !state.currentTarget.name,
    });
  }

  return (
    <div>
      <h1>Find a Flick</h1>
      <p>What flick do you wanna find today?</p>
      <div>
        {state.clickMovies ? (
          <SearchBarMovies />
        ) : state.clickSeries ? (
          <SearchBarSeries />
        ) : (
          <div>
            <button
              className="mainBtn"
              onClick={handleClick}
              name="clickSeries"
            >
              Series
            </button>
            <button
              className="mainBtn"
              onClick={handleClick}
              name="clickMovies"
            >
              Movies
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
