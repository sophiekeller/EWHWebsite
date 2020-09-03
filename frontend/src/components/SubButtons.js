import React from "react";

import images from "../assets/images/aboutImages/aboutImages.js";

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
    let pics = [images.electrical, images.intdesign, images.software];
    return (
      <div className="sub-buttons">
        {pics.map((pic) => {
          return (
            <div className="sub-button">
              <img className={subPic} src={pic} alt={""} />
            </div>
          );
        })}
      </div>
    );
  }
}
