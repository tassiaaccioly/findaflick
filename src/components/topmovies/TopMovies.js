import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TopMovies(props) {
  const [list, setList] = useState([
    {
      original_title: "",
      poster_path: "",
      release_date: "2020-20-20",
      vote_average: "",
      overview: "",
      id: "",
    },
  ]);

  const [page, setPage] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  let number;

  number = props.match.params.num;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=4afee1c44582b308becde04cf925a9c5&language=en-US&page=${number}`
        );

        setList([...response.data.results]);
        setPage({ ...response.data });
      } catch (err) {}
    };
    fetchData();
  }, [props, number]);

  let previous = (Number(number) - 1).toString();

  let next = (Number(number) + 1).toString();

  return (
    <div className="movies-list">
      {list.map((movie) => (
        <div className="movielist-item" key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
                : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
            }
            alt="Poster"
          />
          <div className="movielist-info">
            <h3>
              <span>
                {movie.name || movie.title
                  ? `${movie.name || movie.title}`
                  : movie.original_title}{" "}
              </span>{" "}
              | {movie.vote_average} ★
            </h3>
            <hr />
            <p>{movie.overview}</p>
            <div className="moviebutton-container">
              <Link className="movieitem-button" to={`/movies/${movie.id}`}>
                See Details
              </Link>
            </div>
          </div>
        </div>
      ))}
      {page.page === page.total_pages && page.page === 1 ? (
        <div className="button-container-flex">
          <p>{page.page}</p>
        </div>
      ) : page.page === 1 ? (
        <div className="button-container-flex">
          <p>{page.page}</p>
          <Link className="page-button" to={`/movies/toprated/page${next}`}>
            {" "}
            →
          </Link>
        </div>
      ) : page.page === page.total_pages ? (
        <div className="button-container-flex">
          <p>{page.page}</p>
          <Link className="page-button" to={`/movies/toprated/page${previous}`}>
            ←
          </Link>
        </div>
      ) : (
        <div className="button-container-flex">
          <Link className="page-button" to={`/movies/toprated/page${previous}`}>
            ←
          </Link>
          <p>{page.page}</p>
          <Link className="page-button" to={`/movies/toprated/page${next}`}>
            {" "}
            →
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopMovies;
