import React, { useState, useEffect } from "react";
import axios from "axios";

import SeriesLike from "../serieslike/SeriesLike";
import SeriesCredits from "../seriescredits/SeriesCredits";
import YoutubePlayerX from "../youtubeplayerX/YoutubePlayerX";
import SpotifyPlayerX from "../spotifyplayer/SpotifyPlayerX";

import getYear from "../functions/getYear";

import "./SeriesDetail.css";

function SeriesDetail(props) {
  const [series, setSeries] = useState({
    poster_path: "",
    original_name: "",
    episode_run_time: "",
    tagline: "",
    overview: "",
    original_language: "",
    number_of_seasons: 1,
    number_of_episodes: 10,
    popularity: "",
    id: "",
    vote_average: "",
    first_air_date: "2020-20-20",
    created_by: [
      {
        name: "",
        profile_path: "",
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = props.match.params.id;

        const response = await axios.get(
          `https://api.themoviedb.org/3/tv/${id}?api_key=4afee1c44582b308becde04cf925a9c5`
        );

        setSeries({ ...response.data });
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  let year = getYear(series.first_air_date);

  return (
    <div className="seriesdetails">
      <div className="flex">
        <img
          className="mainImg"
          src={
            series.poster_path
              ? `http://image.tmdb.org/t/p/w342/${series.poster_path}`
              : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
          }
          alt="Poster"
        />
        <div className="infos">
          <h3>
            <span>
              {series.name || series.title
                ? `${series.name || series.title}`
                : series.original_name}{" "}
            </span>
            | {series.episode_run_time} min |{" "}
            {series.original_language.toUpperCase()}
          </h3>
          <hr />
          <p className="runtime">{series.number_of_seasons} seasons</p>
          <div className="textInfos">
            {series.tagline ? (
              <p className="tagline">"{series.tagline}"</p>
            ) : (
              <></>
            )}
            <p className="sinopsis">{series.overview}</p>
          </div>
          <div className="data">
            <p>Number of Episodes: {series.number_of_episodes} ★ </p>
            <p>Series Popularity: #{series.popularity}</p>
            <p>Series Score: {series.vote_average} ★ </p>
          </div>
        </div>
      </div>
      <SeriesCredits id={series.id} />
      <div className="flex">
        <a href={`http://www.imdb.com/title/${series.imdb_id}`}>
          <button className="button">See on IMDB</button>
        </a>
      </div>
      <div className="serieslike-container">
        <h5>Find Similar Series</h5>
        <SeriesLike id={series.id} />
      </div>
      <div className="media-container">
        <YoutubePlayerX
          year={year}
          original_name={series.original_name}
          name={series.name}
        />
        <SpotifyPlayerX
          year={year}
          original_name={series.original_name}
          name={series.name}
        />
      </div>
    </div>
  );
}

export default SeriesDetail;
