import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SearchBarMovies.css";

function SearchBarMovies(props) {
  function handleChange(event) {
    props.setSearchMovie(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  let btn;

  function onKeyDown(event) {
    if (event.key === "Enter") {
      btn.click();
    }
    return;
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          className="searchInput"
          name="searchInput"
          id="searchInput"
          placeholder="Find your Flick"
          onChange={handleChange}
          value={props.searchMovie}
          onKeyDown={onKeyDown}
        ></input>
      </div>
      <div className="secondaryBtn-container">
        <button
          className="secondaryBtn"
          ref={(node) => (btn = node)}
          type="submit"
          onClick={handleClick}
        >
          <Link to="/movies/page1">Search</Link>
        </button>
      </div>
    </div>
  );
}

export default SearchBarMovies;
