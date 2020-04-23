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
        <div className="buttons">
          <NavButton pagename={"About Us"} />
          <NavButton pagename={"Our Page"}/>
          <NavButton pagename={"Projects"}/>
          <NavButton pagename={"Contact Us"}/>
        </div>
      </div>
    );
  }
}
