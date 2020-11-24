import React from "react";

import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <hr />
      <p>
        This web application was made using React, React Router DOM, Axios and
        different API`s as a class exercise.
      </p>
      <div className="profile-container">
        <div className="infos-container">
          <h4>Tassia Accioly</h4>
          <hr />
          <p>
            Tassia is a Web Dev student at Ironhack, a previous movie industry
            worker and movie enthusiast and gamer on her off hours.
          </p>
          <div className="socials">
            <a className="socialicon" href="https://twitter.com/itsmetherogue">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a
              className="socialicon"
              href="https://linkedin.com/in/tassiaaccioly/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/tassiaaccioly">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
        <div className="infos-container">
          <h4>Denis Mota</h4>
          <hr />
          <p>
            The most recent Ironhacker, my name is Denis and I am passionate
            about travel & programing.
          </p>
          <div className="socials">
            <a
              className="socialicon"
              href="https://linkedin.com/in/denis--mota/"
            >
              <img src="./images/linkedin.svg" alt="Linkedin" />
            </a>
            <a className="socialicon" href="https://github.com/DenisM20">
              <img src="./images/github.svg" alt="Github" />
            </a>
          </div>
        </div>
      </div>

      <div className="credits-container">
        <h2>Used API`s</h2>
        <hr />
        <div>
          <a href="https://www.themoviedb.org/documentation/api?language=pt-BR">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TMDB Logo"
            />
          </a>
          <h4>The Movie Database</h4>
        </div>
        <div>
          <a href="https://developers.google.com/youtube?hl=en">
            <img src="./images/youtube.png" alt="Youtube Logo" />
          </a>
          <h4>Youtube</h4>
        </div>
        <a href="https://developer.spotify.com/">
          <img src="./images/spotify.png" alt="Spotify Logo" />
        </a>
        <h4>Spotify</h4>
      </div>
    </div>
  );
}

export default About;
