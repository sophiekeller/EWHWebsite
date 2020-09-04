import React from "react";
//ASSETS
import { screenId } from "../constants.js";
import images from "../assets/images/navbarImages/navbarImages.js";
import pageData from "../assets/pageData/navbar.js";
//COMPONENTS
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton.js";

/* Mobile Navigation Bar Component
 * PROPS:
 * switchPage = function () => switches current page in App's state
 * selectedId = current selected page, string
 */
export default class MobileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, //if menu is open
      pages: pageData.pages,
    };
  }
  /* renders mobile nav bar */
  render() {
    let link = window.location.href;
    let selected = null;
    this.state.pages.forEach((page) => {
      if (link.includes(page.url)) {
        selected = page.url;
      }
    });
    if (!selected) {
      selected = "about";
    }
    return (
      <div className="mobnav-container">
        <div className="mobnav-top-row">
          <Link to="/">
            <img
              className="mobnav-logo"
              src={images.logo}
              onClick={() => {
                this.forceUpdate();
              }}
              alt=""
            />
          </Link>
          <img
            className="menu-button"
            onClick={() => {
              this.setState(function (state) {
                return { open: !state.open };
              });
            }}
            src={images.menu}
            alt=""
          />
        </div>
        {this.state.open && ( //renders buttons only if open
          <div className="mobnav-buttons-container">
            <div className="collapse-container">
              {this.state.pages.map((data) => {
                return (
                  <Link to={"/" + data.url}>
                    <NavButton
                      mobile={true}
                      pagename={data.title}
                      switchPage={() => {
                        this.forceUpdate();
                      }}
                      selected={selected == data.url}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}
