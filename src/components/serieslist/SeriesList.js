import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./SeriesList.css";

function SeriesList(props) {
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

  let seriesinput = "friends";

  function normalizeInput() {
    seriesinput = props.searchSeries.toLowerCase().split(" ").join("%20");
    return;
  }

  normalizeInput();

  let number;

  number = props.match.params.num;

  useEffect(() => {
    const fetchData = async () => {
      try {
        number = props.match.params.num;

        const response = await axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=4afee1c44582b308becde04cf925a9c5&language=en-US&page=${number}&query=${seriesinput}&include_adult=false`
        );

        setList([...response.data.results]);
        setPage({ ...response.data });
      } catch (err) {}
    };
    fetchData();
  }, [props]);

  let previous = (Number(number) - 1).toString();

  let next = (Number(number) + 1).toString();

  return (
    <div className="series-list">
      {list.map((series) => (
        <div className="serieslist-item" key={series.id}>
          <img
            src={
              series.poster_path
                ? `http://image.tmdb.org/t/p/w185/${series.poster_path}`
                : "https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
            }
            alt="Poster"
          />
          <div className="serieslist-info">
            <h3>
              <span>
                {series.name || series.title
                  ? `${series.name || series.title}`
                  : series.original_title}{" "}
              </span>{" "}
              | {series.vote_average} ★
            </h3>
            <hr />
            <p>{series.overview}</p>
            <div className="seriesbutton-container">
              <Link className="seriesitem-button" to={`/series/${series.id}`}>
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
          <Link className="page-button" to={`/series/page${next}`}>
            {" "}
            →
          </Link>
        </div>
      ) : page.page === page.total_pages ? (
        <div className="button-container-flex">
          <p>{page.page}</p>
          <Link className="page-button" to={`/series/page${previous}`}>
            ←
          </Link>
        </div>
      ) : (
        <div className="button-container-flex">
          <Link className="page-button" to={`/series/page${previous}`}>
            ←
          </Link>
          <p>{page.page}</p>
          <Link className="page-button" to={`/series/page${next}`}>
            {" "}
            →
          </Link>
        </div>
      )}
    </div>
  );
}

export default SeriesList;
