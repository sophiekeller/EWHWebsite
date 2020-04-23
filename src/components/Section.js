import React from "react";

import images from "../assets/images/images.js"
export default class Section extends React.Component {
  render() {
    return (
        <div className = "section">
        <h1 className = "section-title">{this.props.title}</h1>
        <p className= "section-text">{this.props.text}</p>
        <img
            className="section-photo"
            src={this.props.hasPhoto ? this.props.photo: ""}
            alt={""}/>

        </div>

           // <img
           //     className="section-image"
           //     #src={this.props.hasPhoto ? images.{} : ''}
           // <hr classname = "hori-bar">);
       );
  }
}
