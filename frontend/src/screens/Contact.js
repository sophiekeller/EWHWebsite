import React from "react";

import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";

/* Contact Page Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
*/
export default class Contact extends React.Component {

    /* renders contact page */
    render() {
        return (
            <div className="home-container">
                <Header mobile = {this.props.mobile}
                    photo={images.header2}
                    state={this.state}
                    title = "Contact Us"/>
                <div className="sections-container">
                </div>
            </div>
        );
  }
}
