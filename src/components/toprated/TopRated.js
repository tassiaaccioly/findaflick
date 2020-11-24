import React from "react";
import { Link } from "react-router-dom";

function TopRated() {
  return (
    <div className="homepage-container">
      <h1>Top Rated</h1>
      <p>Choose your path</p>
      <div className="mainBtn-container">
        <Link to="/movies/toprated/page1">
          <button className="mainBtn">Movies</button>
        </Link>
        <Link to="/series/toprated/page1">
          <button className="mainBtn">Series</button>
        </Link>
      </div>
    </div>
  );
}

export default TopRated;
