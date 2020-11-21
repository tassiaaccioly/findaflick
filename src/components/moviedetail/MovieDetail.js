import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieLike from "../movielike/MovieLike";

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
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = 550;

        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4afee1c44582b308becde04cf925a9c5`
        );

        console.log(response);

        console.log(response.data);

        setMovie({ ...response.data });
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  function getRuntime() {
    let hour = Math.floor(movie.runtime / 60);
    let min = movie.runtime % 60;

    return `${hour}h${min}min`;
  }

  function getYear() {
    let year = movie.release_date.split("-");

    return year[0];
  }

  return (
    <div>
      <img
        src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        alt={`${movie.original_title}'s Poster`}
      />
      <h3>
        {movie.original_title} | {getYear()}
      </h3>
      <span>{getRuntime()}</span>
      <p>"{movie.tagline}"</p>
      <p>{movie.overview}</p>
      <p>Movie Popularity: #{movie.popularity}</p>
      <a href={`http://www.imdb.com/title/${movie.imdb_id}`}>See on IMDB</a>
      <div>
        <MovieLike id={movie.id} />
      </div>
    </div>
  );
}

export default MovieDetail;
