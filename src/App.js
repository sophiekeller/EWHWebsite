import React from "react";

//COMPONENTS
import Navbar from "./components/Navbar.js";
//SCREENS
import Home from "./screens/Home.js";
import About from "./screens/About.js";
//STYLES
import "./assets/styles/styles.css";

//CONSTANTS
import { screenId } from "./constants.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      screenId: screenId.home //default to home page
    };
  }

  /*
  Given a screen id, swap to that page
  */
  switchPage = screenId => {
    this.setState({ screenId: screenId });
  };

  //based on this.state.screenId, figure out which page to render!
  getCurrentPage = () => {
    switch (this.state.screenId) {
      case screenId.home:
        return <Home />;
      case screenId.about:
        return <About />;
      //TODO: add more pages here!
      default:
        return <div> 404 page not found {this.state.screenId}</div>; //shouldn't ever reach this
    }
  };

  //render the navbar and the current page being looked at
  render() {
    return (
      <div class="main-container">
        <Navbar switchPage={this.switchPage} />
        {this.getCurrentPage()}
      </div>
    );
  }
}
