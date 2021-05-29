import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MovieCredits.css";

function MovieCredits(props) {
  const [cast, setCast] = useState([
    {
      character: "",
      id: "",
      name: "",
      profile_path: "",
    },
  ]);
  const [crew, setCrew] = useState([
    {
      department: "Directing",
      job: "Director",
      name: "",
      id: "",
      profile_path: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${props.id}/credits?api_key=4afee1c44582b308becde04cf925a9c5`
        );

        setCast([...response.data.cast]);
        setCrew([...response.data.crew]);
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  let directors = crew.filter((elem) => elem.job === "Director");

  return (
    <div>
      <h5>
        <strong>Director(s):</strong>
      </h5>
      <div className="director-container scroll-container">
        {directors.map((elem) => (
          <div className="directors" key={elem.id}>
            <img
              src={
                elem.profile_path
                  ? `http://image.tmdb.org/t/p/w92/${elem.profile_path}`
                  : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
              }
              alt={`${elem.name}`}
            />
            <p>
              <strong>{elem.name}</strong>
            </p>
          </div>
        ))}
      </div>
      <h5>
        <strong>Actors/Actresses: </strong>
      </h5>
      <div className="actors-container scroll-container">
        {cast.slice(0, 10).map((actor) => (
          <div className="actors" key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `http://image.tmdb.org/t/p/w92/${actor.profile_path}`
                  : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
              }
              alt={`${actor.name}`}
            />
            <p>
              <strong>{actor.name}</strong>
            </p>
            <p>as {actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCredits;
