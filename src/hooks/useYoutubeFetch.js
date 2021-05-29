import { useEffect, useState } from "react";
import axios from "axios";

export const useYoutubeFetch = (queries) => {
  const [video, setVideo] = useState("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        if (queries) {
          const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${queries}&key=AIzaSyDonqhSsm00YnVH55MS42d_TYKm_cJM3fk`
          );

          setVideo(response.data.items[0].id.videoId);
        }
      } catch (err) {
        console.log("useYoutubeFetch Error: ", err);
      }
    };
    fetchVideo();
  }, [queries]);

  return video;
};

export default useYoutubeFetch;
