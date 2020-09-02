import React from "react";
//ASSETS
import { screenId } from "../constants.js";
import images from "../assets/images/images.js";

/* NavButton Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 * switchPage = function () => switches page current page in App's state to appropriate one
 * pagename = name of page button represents, string
 * selected = if this page is currently selected, bool
 */
export default class NavButton extends React.Component {
  /* renders navigation button in navbar */
  render() {
    let c = "nav-button";
    if (this.props.selected) {
      c += "-selected";
    } else {
      c += "-unselected";
    }
    if (this.props.mobile) {
      c += " nav-button-m";
    } else {
      c += " nav-button";
    }
    return (
      <div className={c} onClick={() => this.props.switchPage()}>
        {this.props.pagename}
      </div>
    );
  }
}
