import React from "react";

import "./SearchBar.css";

function SearchBar(props) {
  const {
    searchMovie,
    setSearchMovie,
    searchSeries,
    setSearchSeries,
    search,
    history,
  } = props;

  const isSeries = search === "series";

  function handleChange(event) {
    const value = event.currentTarget.value;
    return isSeries ? setSearchSeries(value) : setSearchMovie(value);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    return isSeries
      ? history.push("/series/page1")
      : history.push("/movies/page1");
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
          value={isSeries ? searchSeries : searchMovie}
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

export default SearchBar;
