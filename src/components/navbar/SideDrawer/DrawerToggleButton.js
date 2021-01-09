import React from "react";

import "./DrawerToggleButton.css";

//props.drawer (state de abertura da sidebar)

const DrawerToggleButton = (props) => (
  <button className="toggle-button" onClick={props.onClick}>
    <span className={props.drawer ? "buttonLine line1" : "buttonLine"} />
  </button>
);

export default DrawerToggleButton;
