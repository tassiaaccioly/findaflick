import React, { useEffect } from "react";
import axios from "axios";
import qs from "query-string";

function SpotifyPlayer() {
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

        // const token = response.data.access_token;

        // const artists = await axios.get(
        //   "https://api.spotify.com/v1/search?q=shakira&type=playlist",
        //   {
        //     headers: {
        //       Authorization: "Bearer " + token,
        //     },
        //   }
        // );
        // console.log(artists);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p>Hello!</p>
      <iframe></iframe>
    </div>
  );
}

export default SpotifyPlayer;
