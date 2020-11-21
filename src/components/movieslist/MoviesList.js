import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MoviesList(props) {
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
        number = props.match.params.num;

        console.log(typeof number);

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/multi?api_key=4afee1c44582b308becde04cf925a9c5&query=psycho&page=${number}&include_adult=false`
        );

        setList([...response.data.results]);
        setPage({ ...response.data });
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  let previous = (Number(number) - 1).toString();

  let next = (Number(number) + 1).toString();

  console.log(page);

  return (
    <div>
      {list.map((movie) => (
        <div key={movie.id}>
          <img
            src={
              movie.poster_path
                ? `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
                : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
            }
            alt="Poster"
          />
          <div>
            <h3>
              {movie.name || movie.title
                ? `${movie.name || movie.title}`
                : movie.original_title}{" "}
              | Score {movie.vote_average}
            </h3>
            <hr />
            <p>{movie.overview}</p>

            <Link to={`/movies/${movie.id}`}>See Details</Link>
          </div>
        </div>
      ))}
      {page.page === page.total_pages && page.page === 1 ? (
        <div>
          <p>Page {page.page}</p>
        </div>
      ) : page.page === 1 ? (
        <div>
          <p>Page {page.page}</p>
          <Link to={`/movies/page${next}`}> Next Page</Link>
        </div>
      ) : page.page === page.total_pages ? (
        <div>
          <p>Page {page.page}</p>
          <Link to={`/movies/page${previous}`}>Previous Page</Link>
        </div>
      ) : (
        <div>
          <Link to={`/movies/page${previous}`}>Previous Page</Link>
          <p>Page {page.page}</p>
          <Link to={`/movies/page${next}`}> Next Page</Link>
        </div>
      )}
    </div>
  );
}

export default MoviesList;
