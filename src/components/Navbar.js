import React from "react";
import { screenId } from "../constants.js";

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
        <div
          className="navbar-title"
          onClick={() => this.props.switchPage(screenId.home)}
        >
          Cornell Engineering World Health
        </div>
        <div className="navbar-right-container">
          <div
            className="navbar-subtitle"
            onClick={() => this.props.switchPage(screenId.about)}
          >
            About Us
          </div>
          <div
            className="navbar-subtitle"
            onClick={() => this.props.switchPage(screenId.ourTeam)}
          >
            Our Team
          </div>
          <div
            className="navbar-subtitle"
            onClick={() => this.props.switchPage(screenId.projects)}
          >
            Projects
          </div>
          <div
            className="navbar-subtitle"
            onClick={() => this.props.switchPage(screenId.contactUs)}
          >
            Contact Us
          </div>
        </div>
      </div>
    );
  }
}
