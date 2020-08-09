import React from "react";

import images from "../assets/images/images.js"

/* Image Buttons in About Page Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
*/
export default class SubButtons extends React.Component {
    /* renders sub buttons */
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
       );
  }
}
