import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBarSeries(props) {
  function handleChange(event) {
    props.setSearchSeries(event.currentTarget.value);
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
          value={props.searchSeries}
        ></input>
      </div>
      <div className="secondaryBtn-container">
        <Link to="/series/page1">
          <button className="secondaryBtn">Search</button>
        </Link>
      </div>
    </div>
  );
}

export default SearchBarSeries;
