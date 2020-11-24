import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "query-string";

function SpotifyPlayer(props) {
  const [playlist, setPlaylist] = useState("");

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
        const requestToken = btoa(
          `${process.env.REACT_APP_SPOTIFY_ID}:${process.env.REACT_APP_SPOTIFY_SECRET}`
        );

        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          qs.stringify({ grant_type: "client_credentials" }),
          {
            headers: {
              Authorization: "Basic " + requestToken,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        console.log(response);

        const token = response.data.access_token;

        const artists = await axios.get(
          `https://api.spotify.com/v1/search?q=${searchTerm}%20soundtrack&type=playlist`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setPlaylist(artists.data.playlists.items[0].id);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [props]);

  let playlistId = `${playlist}`;

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>Playlist</h3>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        title={playlistId}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;
