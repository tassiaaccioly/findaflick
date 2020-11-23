import React, { useState } from "react";

function SearchBarSeries() {
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
        ></input>
      </div>
      <div className="secondaryBtn-container">
        <button className="secondaryBtn">Search</button>
        <button className="secondaryBtn">Random</button>
      </div>
    </div>
  );
}

export default SearchBarSeries;
