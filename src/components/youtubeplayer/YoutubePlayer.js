import React from "react";
import encodeSearchTerm from "../../helpers/encodeSearchTerm";
import useYoutubeFetch from "../../hooks/useYoutubeFetch";

import "./YoutubePlayer.css";

function YoutubePlayer(props) {
  const searchTerm = encodeSearchTerm(props);

  let query;

  if (props.movie) {
    query = `${searchTerm}%20trailer%20${props.year}`;
  }

  if (props.series) {
    query = `${searchTerm}%20series%20trailer%20${props.year}`;
  }

  let video = useYoutubeFetch(query);

  let videoId = `${video}`;

  return (
    <div className="responsive-video">
      <h3>Trailer</h3>
      {video ? (
        <iframe
          title={searchTerm}
          className="video-frame"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&vq=hd720&modestbranding=1&autoplay=0&controls=2`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="notrailer">
          <p>"Sorry, trailer not found"</p>
        </div>
      )}
    </div>
  );
}

export default YoutubePlayer;
