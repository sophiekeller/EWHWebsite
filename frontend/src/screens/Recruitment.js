import React from "react";
import images from "../assets/images/recruitmentImages/recruitmentImages.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
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
        <div className="contacts-container">
          <div className="contact-title">Fall 2020 Recruitment</div>
          <div className="recruitment-paragraph">
            We are excited to be recruiting sophomores, juniors, and seniors
            this fall.
          </div>
          <div className="contact-buttons-container">
            <Link to="/contact">
              <div className="contact-button">Questions?</div>
            </Link>
            <a
              href="https://hello.com/en/index.html"
              className="contact-button"
            >
              Application
            </a>
            <img
              className="timeline-photo"
              alt="timeline"
              src={images.timeline}
            />
          </div>
        </div>
      </div>
    );
  }
}
let mission_statement =
  "Our team depends on the generous support of our sponsors. Learn about what we do and how you can help.";
