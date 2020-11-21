import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieLike from "../movielike/MovieLike";
import MovieCredits from "../moviecredits/MovieCredits";

import getRuntime from "../functions/getRuntime";
import getYear from "../functions/getYear";

import "./MovieDetail.css";

function MovieDetail(props) {
  const [movie, setMovie] = useState({
    poster_path: "",
    original_title: "",
    runtime: 0,
    release_date: "",
    tagline: "",
    overview: "",
    popularity: "",
    imdb_id: "",
    id: "",
    vote_average: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = props.match.params.id;

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4afee1c44582b308becde04cf925a9c5`
        );

        setMovie({ ...response.data });
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  return (
    <div>
      <img
        src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt="Poster"
      />
      <h3>
        {movie.name || movie.title
          ? `${movie.name || movie.title}`
          : movie.original_title}{" "}
        | {getYear(movie.release_date)}
      </h3>
      <span>{getRuntime(movie.runtime)}</span>
      <p>
        {movie.tagline ? `"${movie.tagline}"` : `"This movie has no tagline"`}
      </p>
      <p>{movie.overview}</p>
      <p>Movie Popularity: #{movie.popularity}</p>
      <p>Movie Score: {movie.vote_average}</p>
      <MovieCredits id={movie.id} />
      <a href={`http://www.imdb.com/title/${movie.imdb_id}`}>See on IMDB</a>
      <div>
        <MovieLike id={movie.id} />
      </div>
    </div>
  );
}

export default MovieDetail;
