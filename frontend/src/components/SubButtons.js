import React from "react";

import images from "../assets/images/images.js"
export default class SubButtons extends React.Component {
  render() {
    return (
        <div className = "sub-buttons">
            <div className = "sub-button">
            
            <img
                className="sub-pic"
                src={images.electrical}
                alt={""}/>
            </div>
            <div className = "sub-button">
            <img
                className="sub-pic"
                src={images.intdesign}
                alt={""}/>
            </div>
            <div className = "sub-button">
            <img
                className="sub-pic"
                src={images.software}
                alt={""}/>
            </div>
        </div>


           // <img
           //     className="section-image"
           //     #src={this.props.hasPhoto ? images.{} : ''}
           // <hr classname = "hori-bar">);
       );
  }
}
