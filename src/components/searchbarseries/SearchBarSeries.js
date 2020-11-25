import React from "react";

function SearchBarSeries(props) {
  function handleChange(event) {
    props.setSearchSeries(event.currentTarget.value);
  }

  function onKeyDown(event) {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
    return;
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.history.push("/series/page1");
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
          value={props.searchSeries}
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

export default SearchBarSeries;
