import React from "react";

import { screenId } from "../constants.js";

import images from "../assets/images/images.js";

export default class Header extends React.Component {
  // render() {
  //     var namelogo = this.props.state.screenId==screenId.about ? "../images/namelogo.png" : "";
  //     var photo = this.props.state.screenId==screenId.about ? "../images/homepic.png" : "";
  //     var sty = {"background-image: url(" + namelogo + "), linear-gradient(1.65deg, #253263 1.13%, rgba(196, 196, 196, 0) 96.36%), url(" + photo + ");background-position: 50% 70%, center, center;background-size: auto, cover, cover;background-repeat: no-repeat;"}>
  //   return(
  //       <div className="header-container"
  //           // style = {sty}
  //           >
  //           </div>
  //   )
  // }
  render() {
    return (
      <div className="header-container">
        <img className="header-photo"
            alt="background"
            src= {images.homepic}/>
        <div className="header-gradient"/>
        <img className="name-logo"
            alt="logo"
            src={images.namelogo}
            />
        </div>
    );
  }
}
