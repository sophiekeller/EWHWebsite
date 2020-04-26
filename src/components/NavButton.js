import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js"

export default class NavButton extends React.Component {
  render() {
    return (
        <div
          className= {(this.props.state.screenId==this.props.id) ? "nav-button-selected" :"nav-button"}
          onClick={() => this.props.switchPage(this.props.id)}
        >
          {this.props.pagename}
        </div>
       );
  }

}
