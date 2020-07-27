import React from "react";
import { screenId } from "../constants.js";

import images from "../assets/images/images.js";

export default class NavButton extends React.Component {
  render() {
      let c = "nav-button"
      if (this.props.selected){
          c += "-selected"
      }else{
          c += "-unselected"
      }
      if (this.props.mobile){
          c+= " nav-button-m"
      }else{
          c+= " nav-button"
      }
    return (
      <div
        className={c}
        onClick={() => this.props.switchPage()}
      >
        {this.props.pagename}
      </div>
    );
  }
}
