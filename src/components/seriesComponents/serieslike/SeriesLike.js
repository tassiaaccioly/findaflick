import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SeriesLike.css";

function SeriesLike(props) {
  const [seriesLike, setSeriesLike] = useState([
    {
      original_name: "",
      poster_path: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLike = await axios.get(
          `https://api.themoviedb.org/3/tv/${props.id}/similar?api_key=4afee1c44582b308becde04cf925a9c5&language=en-US&page=1`
        );

        setSeriesLike([...responseLike.data.results]);
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  return (
    <div className="scroll-container01">
      {seriesLike.slice(0, 10).map((series) => (
        <Link key={series.id} to={`/series/${series.id}`}>
          <div className="serieslike-item">
            <img
              src={
                series.poster_path
                  ? `http://image.tmdb.org/t/p/w154/${series.poster_path}`
                  : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
              }
              alt={`${series.original_name}'s Poster`}
            />
            <p>{series.original_name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SeriesLike;
