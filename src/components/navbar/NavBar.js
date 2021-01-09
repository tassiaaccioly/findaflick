import React, { useState } from "react";

import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import Toolbar from "./Toolbar/Toolbar";

function NavBar() {
  const [drawer, setDrawer] = useState(false);

  function handleClick() {
    setDrawer(!drawer);
  }

  return (
    <div>
      <Toolbar handleClick={handleClick} drawer={drawer} />
      <SideDrawer show={drawer} />
      {drawer ? <Backdrop onClick={handleClick} /> : <></>}
    </div>
  );
}

export default NavBar;
