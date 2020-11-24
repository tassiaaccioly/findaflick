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
      handleSubmit(event);
    }
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/movies/page1");
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar-container">
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
        <button className="secondaryBtn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBarMovies;
