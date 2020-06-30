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
    return (
      <div className="header-container">
      <img className="header-photo"
       alt="background"
       src= {this.props.photo}/>
       <div className="header-gradient"/>
       {overlay}
      </div>
    );
  }
}
