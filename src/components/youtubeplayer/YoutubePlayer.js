import React, { useEffect, useState } from "react";
import axios from "axios";

import "./YoutubePlayer.css";

function YoutubePlayer(props) {
  const [video, setVideo] = useState("");

  let searchTerm;

  const normalizeSearchTerm = () => {
    if (props.name) {
      return (searchTerm = props.name.toLowerCase().split(" ").join("%20"));
    } else if (props.title) {
      return (searchTerm = props.title.toLowerCase().split(" ").join("%20"));
    } else if (props.original_title) {
      return (searchTerm = props.original_title
        .toLowerCase()
        .split(" ")
        .join("%20"));
    }
  };

  normalizeSearchTerm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm) {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}%20trailer%20${props.year}&key=AIzaSyDonqhSsm00YnVH55MS42d_TYKm_cJM3fk`
          );

          setVideo(response.data.items[0].id.videoId);
        }
      } catch (err) {}
    };
    fetchData();
  }, [props, searchTerm]);

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
