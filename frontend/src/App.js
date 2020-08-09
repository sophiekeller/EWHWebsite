import React from "react";
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
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

    /* add listener for screen size change */
    componentWillMount() {
      window.addEventListener('resize',this.handleWindowSizeChange);
      document.title = "Sophie Keller";
     }

    /* remove the listener when the component is not mounted anymore */
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    /* function called on resize of screen to change screen width in state */
    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    /*
    Given a screen id, swap to that page
    */
    switchPage = screenId => {
      this.setState({ screenId: screenId });
    };

    /* render the navbar and the current page being looked at with router */
    render() {
       const mobile = this.state.width <= 650;
       let navbar = (<NavBar switchPage={this.switchPage} selectedId={this.state.screenId} />)
       if (mobile) {
        navbar = (<MobNav switchPage={this.switchPage} selectedId={this.state.screenId} />)
      }
      return (
        <div class="main-container">
        <Router>
            {navbar}
            <Switch>
              <Route exact path="/">
                <About mobile = {mobile}/>
              </Route>
              <Route exact path="/contact">
                <Contact mobile = {mobile}/>
              </Route>
              <Route exact path="/team">
                <Team mobile = {mobile}/>
              </Route>
              <Route exact path="/projects">
                <Projects mobile = {mobile}/>
              </Route>
            </Switch>
            <Footer mobile = {mobile} />
        </Router>
        </div>
      );
    }
    }
