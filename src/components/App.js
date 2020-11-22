import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SideDrawer from "./navbar/SideDrawer/SideDrawer";
import Backdrop from "./navbar/Backdrop/Backdrop";
import Toolbar from "./navbar/Toolbar/Toolbar";
import MovieDetail from "./moviedetail/MovieDetail";
import MoviesList from "./movieslist/MoviesList";
import "./App.css";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <BrowserRouter>
          <div style={{ height: "100%" }}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}
            <main style={{ marginTop: "64px" }}>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
              <p> Content</p>
            </main>
          </div>
          <Switch>
            <Route exact path="/movies/page:num" component={MoviesList} />
            <Route exact path="/movies/:id" component={MovieDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
