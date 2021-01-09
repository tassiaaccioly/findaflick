import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = (props) => {
  return (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <Link to="/toprated">Top Rated</Link>
        </li>
        <li>
          <Link to="/recomendations">Recomendation</Link>
        </li>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
