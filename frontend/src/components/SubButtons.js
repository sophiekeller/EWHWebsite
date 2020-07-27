import React from "react";

import images from "../assets/images/images.js"
export default class SubButtons extends React.Component {
  render() {

      let sub_pic = "sub-pic"
      if (this.props.mobile){
          sub_pic = "sub-pic-m"
      }
    return (
        <div className = "sub-buttons">
            <div className = "sub-button">

            <img
                className={sub_pic}
                src={images.electrical}
                alt={""}/>
            </div>
            <div className = "sub-button">
            <img
                className={sub_pic}
                src={images.intdesign}
                alt={""}/>
            </div>
            <div className = "sub-button">
            <img
                className={sub_pic}
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
