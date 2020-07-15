import React from "react";

//Design
//https://www.figma.com/file/iHNf8ii0cEDhOkLSrFXU2e/EHW-Website?node-id=0%3A1
//COMPONENTS
import Navbar from "./components/Navbar.js";
//SCREENS
import About from "./screens/About.js";
import Contact from "./screens/Contact.js";
import Projects from "./screens/Projects.js";
import Team from "./screens/Team.js";
import Footer from "./components/Footer.js";
//STYLES
import "./assets/styles/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

//CONSTANTS
import { screenId } from "./constants.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = {
      screenId: screenId.about //default to home page
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
      case screenId.about:
        return <About switchPage={this.switchPage}/>;
      case screenId.contact:
        return <Contact />;
      case screenId.team:
        return <Team />;
      case screenId.projects:
        return <Projects />;
      default:
        return <div> 404 page not found {this.state.screenId}</div>; //shouldn't ever reach this
    }
  };

  //render the navbar and the current page being looked at
  render() {
    return (
      <div class="main-container">
        <Navbar switchPage={this.switchPage} selectedId={this.state.screenId} />
        {this.getCurrentPage()}
        <Footer />
      </div>
    );
  }
}
