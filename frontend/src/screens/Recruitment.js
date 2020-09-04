import React from "react";
import images from "../assets/images/recruitmentImages/recruitmentImages.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import text from "../assets/pageData/recruitment.js";
import { Link } from "react-router-dom";

//COMPONENTS
import Header from "../components/Header";

// const {google} = require('googleapis');

/* Contact Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Recruitment extends React.Component {
  constructor(props) {
    super(props);
  }

  /* renders contact page */
  render() {
    return (
      <div className="home-container">
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.secondHeader}
          state={this.state}
          title="Join Us"
        />
        <div className="recruitment-container">
          <div className="contact-title">Fall 2020 Recruitment</div>
          <div className="recruitment-paragraph">{text.message}</div>
          <div className="recruitment-buttons-container">
            <Link to="/contact">
              <div className="contact-button">Questions?</div>
            </Link>
            <a
              href="https://hello.com/en/index.html"
              className="contact-button"
            >
              Application
            </a>
          </div>
          <img
            className="timeline-photo"
            alt="timeline"
            src={images.timeline}
          />
        </div>
      </div>
    );
  }
}
