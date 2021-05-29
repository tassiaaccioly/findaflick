import React, { useState, useEffect } from "react";
import axios from "axios";

import MoviesLike from "../movieslike/MoviesLike";
import MovieCredits from "../moviecredits/MovieCredits";
import YoutubePlayer from "../../youtubeplayer/YoutubePlayer";
import SpotifyPlayer from "../../spotifyplayer/SpotifyPlayer";

import getRuntime from "../../../helpers/getRuntime";
import getYear from "../../../helpers/getYear";

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

  let year = getYear(movie.release_date);

  return (
    <div className="moviedetails">
      <div className="flex">
        <img
          className="mainImg"
          src={
            movie.poster_path
              ? `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
              : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
          }
          alt="Poster"
        />
        <div className="infos">
          <h3>
            <span>
              {movie.name || movie.title
                ? `${movie.name || movie.title}`
                : movie.original_title}{" "}
            </span>
            | {year}
          </h3>
          <hr />
          <p className="runtime">{getRuntime(movie.runtime)}</p>
          <div className="textInfos">
            {movie.tagline ? (
              <p className="tagline">"{movie.tagline}"</p>
            ) : (
              <></>
            )}
            <p className="sinopsis">{movie.overview}</p>
          </div>
          <div className="data">
            <p>Movie Popularity: #{movie.popularity}</p>
            <p>Movie Score: {movie.vote_average} ★ </p>
          </div>
        </div>
      </div>
      <MovieCredits id={movie.id} />
      <div className="flex">
        <a href={`http://www.imdb.com/title/${movie.imdb_id}`}>
          <button className="button">See on IMDB</button>
        </a>
      </div>
      <div className="movielike-container">
        <h5>Find Similar Movies</h5>
        <MoviesLike id={movie.id} />
      </div>
      <div className="media-container">
        <YoutubePlayer
          year={year}
          original_title={movie.original_title}
          title={movie.title}
          name={movie.name}
          movie={movie}
        />
        <SpotifyPlayer
          year={year}
          original_title={movie.original_title}
          title={movie.title}
          name={movie.name}
        />
      </div>
    </div>
  );
}

export default MovieDetail;
