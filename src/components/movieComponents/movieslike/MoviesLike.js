import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./MoviesLike.css";

function MoviesLike(props) {
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
    <div className="scroll-container01">
      {movieLike.slice(0, 10).map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <div className="movielike-item">
            <img
              src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
              alt={`${movie.original_title}'s Poster`}
            />
            <p>{movie.original_title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MoviesLike;
