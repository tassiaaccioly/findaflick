import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBarMovies.css";

function SearchBarMovies(props) {
  function handleChange(event) {
    props.setSearchMovie(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <img src="./images/favicon.svg" alt="search" />
        <input
          type="text"
          className="searchInput"
          name="searchInput"
          id="searchInput"
          placeholder="Find your Flick"
          onChange={handleChange}
          value={props.searchMovie}
        ></input>
      </div>
      <div className="secondaryBtn-container">
        <Link to="/movies/page1">
          <button className="secondaryBtn">Search</button>
        </Link>
        <button className="secondaryBtn">Random</button>
      </div>
    </div>
  );
}

export default SearchBarMovies;
