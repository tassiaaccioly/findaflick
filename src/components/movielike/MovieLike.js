import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./MovieLike.css";

function MovieLike(props) {
  const [movieLike, setMovieLike] = useState([
    {
      original_title: "",
      poster_path: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLike = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.id}/similar?api_key=4afee1c44582b308becde04cf925a9c5&language=en-US&page=1`
        );

        setMovieLike([...responseLike.data.results]);
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  return (
    <div>
      {movieLike.slice(0, 10).map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={`${movie.original_title}'s Poster`}
            />
            <h5>{movie.original_title}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieLike;
