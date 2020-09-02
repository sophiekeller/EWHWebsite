import React from "react";

import images from "../assets/images/images.js";

/* Image Buttons in About Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class SubteamButtons extends React.Component {
  /* renders sub buttons */
  render() {
    let subPic = "sub-pic";
    if (this.props.mobile) {
      subPic = "sub-pic-m";
    }
    return (
      <div className="sub-buttons">
        <div className="sub-button">
          <img className={subPic} src={images.electrical} alt={""} />
        </div>
        <div className="sub-button">
          <img className={subPic} src={images.intdesign} alt={""} />
        </div>
        <div className="sub-button">
          <img className={subPic} src={images.software} alt={""} />
        </div>
      </div>
    );
  }
}
