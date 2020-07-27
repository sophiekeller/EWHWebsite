import React from "react";

import { screenId } from "../constants.js";

import images from "../assets/images/images.js";

export default class Header extends React.Component {
  render() {
      let overlay = null;
      if (this.props.title == "About"){
          overlay = (<img className="name-logo"
           alt="background"
           src= {images.namelogo}/>)}
      else{
          overlay = (<div className = "header-text">{this.props.title}</div>)
      }
      let header_photo = "header-photo"
      let carousel_class = "carousel-class"
      if (this.props.mobile){
          carousel_class = "carousel-class-m"
          header_photo = "header-photo-m"
      }
    return (
      <div className="header-container">
      <img className={header_photo}
       alt="background"
       src= {this.props.photo}/>
       <div className="header-gradient"/>
       {overlay}
      </div>
    );
  }
}
