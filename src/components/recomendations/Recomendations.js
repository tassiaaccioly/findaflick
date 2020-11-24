import React from "react";
import { Link } from "react-router-dom";

function Recomendations() {
  const randomNum = Math.round(Math.random() * 20 + 1);

  return (
    <div className="homepage-container">
      <h1>Recomendations</h1>
      <p>What do you want a recomendation on?</p>
      <div className="mainBtn-container">
        <Link to={`/movies/toprated/page${randomNum}`}>
          <button className="mainBtn">Movies</button>
        </Link>
        <Link to={`/series/toprated/page${randomNum}`}>
          <button className="mainBtn">Series</button>
        </Link>
      </div>
    </div>
  );
}

export default Recomendations;
