import React from "react";

//Design
//https://www.figma.com/file/iHNf8ii0cEDhOkLSrFXU2e/EHW-Website?node-id=0%3A1
//COMPONENTS
import NavBar from "./components/NavBar.js";
import MobNav from "./components/MobNav.js"
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
      screenId: screenId.about, //default to home page
      width: window.innerWidth //get width of page(for mobile)
    };
  }

      //add listener for screen size change
     componentWillMount() {
         window.addEventListener('resize',this.handleWindowSizeChange);
         document.title = "Sophie Keller";
     }

     //remove the listener when the component is not mounted anymore
     componentWillUnmount() {
         window.removeEventListener('resize', this.handleWindowSizeChange);
     }
      //function called on resize of screen to change screen width in state
    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

  /*
  Given a screen id, swap to that page
  */
  switchPage = screenId => {
    this.setState({ screenId: screenId });
  };

  //based on this.state.screenId, figure out which page to render!
  getCurrentPage = (mobile) => {
    switch (this.state.screenId) {
      case screenId.about:
        return <About switchPage={this.switchPage} mobile = {mobile}/>;
      case screenId.contact:
        return <Contact mobile = {mobile}/>;
      case screenId.team:
        return <Team mobile = {mobile}/>;
      case screenId.projects:
        return <Projects mobile = {mobile}/>;
      default:
        return <div> 404 page not found {this.state.screenId}</div>; //shouldn't ever reach this
    }
  };

  //render the navbar and the current page being looked at
  render() {
     const mobile = this.state.width <= 650;
     let page = this.getCurrentPage(false);
     let navbar = (<NavBar switchPage={this.switchPage} selectedId={this.state.screenId} />)
     if (mobile) {
        page = this.getCurrentPage(true)//pass screen's mobile prop 'true'
        navbar = (<MobNav switchPage={this.switchPage} selectedId={this.state.screenId} />)
    }
    return (
      <div class="main-container">
        {navbar}
        {page}
        <Footer mobile = {mobile} />
      </div>
    );
  }
}
