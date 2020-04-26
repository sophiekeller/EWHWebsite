import React from "react";

// import NavButton from "../components/NavButton.js";
import images from "../assets/images/images.js"

/*
think about how we can make this component better
(look at all the duplicate code and see if we can factor that out!)

you also might want to group About Us, Our Team, and Projects together in a
div so they all
*/
export default class Footer extends React.Component {
  render() {
    return (

      <div className="footer-container">

      <div className="left-footer">
        <h3 className="contact">Contact Us</h3>
        <div className="mail-container">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="mail_24px">
        <path id="icon/content/mail_24px" fill-rule="evenodd" clip-rule="evenodd" d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4ZM13.06 12.34L19.6 8.25C19.85 8.09 20 7.82 20 7.53C20 6.86 19.27 6.46 18.7 6.81L12 11L5.3 6.81C4.73 6.46 4 6.86 4 7.53C4 7.82 4.15 8.09 4.4 8.25L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34Z" fill="white"/>
        </g>
        </svg>
        <a className = "email" href="mailto:ewhcornell@gmail.com">ewhcornell@gmail.com</a>
        </div>
      </div>

      <div className="right-footer">
        <a href ={fblink} target = "_blank">
            <img
            className="social-pic"
            src={images.facebook}
            alt="" />
        </a>
        <a href ={instalink} target = "_blank">
            <img
            className="social-pic"
            src={images.insta}
            alt="" />
        </a>

      </div>

      </div>

    );
  }
}

const fblink = "https://www.facebook.com/Cornellewh/"
const instalink = "https://www.instagram.com/cornell_ewh/"
