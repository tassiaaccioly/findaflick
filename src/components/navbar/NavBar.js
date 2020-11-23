import React, { useState } from "react";

import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import Toolbar from "./Toolbar/Toolbar";

function NavBar() {
  const [state, setState] = useState({
    sideDrawerOpen: false,
  });

  function drawerToggleClickHandler() {
    setState({ ...state, sideDrawerOpen: !state.sideDrawerOpen });
  }

  function backdropClickHandler() {
    setState({ ...state, sideDrawerOpen: false });
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={state.sideDrawerOpen} />
      {state.sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : <></>}
    </div>
  );
}

export default NavBar;
