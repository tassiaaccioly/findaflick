import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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

        console.log(response);
        setCast([...response.data.cast]);
        setCrew([...response.data.crew]);
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  let directors = crew.filter((elem) => elem.job === "Director");

  return (
    <div>
      <p>
        <strong>Director(s):</strong>
      </p>
      <div>
        {directors.map((elem) => (
          <div key={elem.id}>
            <img
              src={`http://image.tmdb.org/t/p/w92/${elem.profile_path}`}
              alt={`${elem.name}`}
            />
            <p>
              <strong>{elem.name}</strong>
            </p>
          </div>
        ))}
      </div>
      <p>
        <strong>Actors/Actresses: </strong>
      </p>
      <div>
        {cast.slice(0, 4).map((actor) => (
          <div key={actor.id}>
            <img
              src={`http://image.tmdb.org/t/p/w92/${actor.profile_path}`}
              alt={`${actor.name}`}
            />
            <p>
              <strong>{actor.name}</strong> as {actor.character}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieCredits;
