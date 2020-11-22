import React from "react";
import Logo from "./logonavbar.svg";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <img ClassName="Logosearch" src={Logo} />
      </div>
      <div className="spacer" />
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Best 100</a>
          </li>
          <li>
            <a href="/">Random</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">Series</a>
          </li>
          <li>
            <a href="/">Search</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
