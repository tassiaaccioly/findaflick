import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./FeelsLike.css";

function FeelsLike({ media, id }) {
  const isSeries = media === "tv";

  const [mediasLike, setMediasLike] = useState([
    {
      original_name: null,
      poster_path: null,
      id: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseLike = await axios.get(
          `https://api.themoviedb.org/3/${media}/${id}/similar?api_key=4afee1c44582b308becde04cf925a9c5&language=en-US&page=1`
        );

        setMediasLike([...responseLike.data.results]);
      } catch (err) {}
    };
    fetchData();
  }, [media, id]);

  return (
    <div className="scroll-container01">
      {mediasLike.slice(0, 10).map((media) => (
        <Link key={media.id} to={`/series/${media.id}`}>
          <div className="feelslike-item">
            <img
              src={
                media.poster_path
                  ? `http://image.tmdb.org/t/p/w154/${media.poster_path}`
                  : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
              }
              alt={`${
                isSeries ? media.original_name : media.original_title
              }'s Poster`}
            />
            <p>{isSeries ? media.original_name : media.original_title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeelsLike;
