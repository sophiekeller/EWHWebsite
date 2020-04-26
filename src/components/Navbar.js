import React from "react";
import { screenId } from "../constants.js";

import NavButton from "../components/NavButton.js";
import images from "../assets/images/images.js"

/*
think about how we can make this component better
(look at all the duplicate code and see if we can factor that out!)

you also might want to group About Us, Our Team, and Projects together in a
div so they all
*/
export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <img
            className="logo"
            src= {images.logo}
            alt = ""/>
        <div className="nav-buttons">
          <NavButton pagename={"About Us"} state={this.props.state} id={screenId.about} switchPage={this.props.switchPage}/>
          <NavButton pagename={"Our Team"} state={this.props.state} id={screenId.team} switchPage={this.props.switchPage}/>
          <NavButton pagename={"Projects"} state={this.props.state} id={screenId.projects} switchPage={this.props.switchPage}/>
          <NavButton pagename={"Contact Us"} state={this.props.state} id={screenId.contact} switchPage={this.props.switchPage}/>

        </div>
      </div>
    );
  }
}
