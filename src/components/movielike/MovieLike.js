import React, { useState, useEffect } from "react";
import axios from "axios";

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

        console.log(responseLike);

        setMovieLike([...responseLike.data.results]);
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  return (
    <div>
      {movieLike.slice(0, 10).map((movie) => (
        <div key={movie.id}>
          <img
            src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            alt={`${movie.original_title}'s Poster`}
          />
          <h5>{movie.original_title}</h5>
        </div>
      ))}
    </div>
  );
}

export default MovieLike;
