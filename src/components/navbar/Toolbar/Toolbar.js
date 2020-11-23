import React from "react";
import { Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

function Toolbar(props) {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <Link className="toolbar__logo" to="/">
          {/* <img src="./images/favicon.svg" /> */}
          <h1>Find a Flick</h1>
        </Link>
        <div className="spacer" />
        <div className="toolbar__toggle-button">
          <DrawerToggleButton onClick={props.drawerClickHandler} />
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/best">Best 100</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/">Series</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Toolbar;
