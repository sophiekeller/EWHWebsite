import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js"

export default class NavButton extends React.Component {
  render() {
    return (
        <div
          className="nav-button"
          onClick={() => this.props.switchPage(screenId.about)}
        >
          {this.props.pagename}
        </div>
       );
  }
}
