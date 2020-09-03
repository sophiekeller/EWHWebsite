import React from "react";
//ASSETS
import { screenId } from "../constants.js";
import images from "../assets/images/headerImages/headerImages.js";

/* Header Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 * photo = header photo to be demonstrated, string photo path
 * title = team title, string
 */
export default class Header extends React.Component {
  /* renders header */
  render() {
    let overlay = null;
    if (this.props.title == "About") {
      overlay = (
        <img className="name-logo" alt="background" src={images.namelogo} />
      );
    } else {
      overlay = <div className="header-text">{this.props.title}</div>;
    }
    let headerPhoto = "header-photo";
    let carouselClass = "carousel-class";
    if (this.props.mobile) {
      carouselClass = "carousel-class-m";
      headerPhoto = "header-photo-m";
    }
    return (
      <div className="header-container">
        <img className={headerPhoto} alt="background" src={this.props.photo} />
        <div className="header-gradient" />
        {overlay}
      </div>
    );
  }
}
