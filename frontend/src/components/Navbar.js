import React from "react";
import { screenId } from "../constants.js";
import images from "../assets/images/navbarImages/navbarImages.js";
import pageData from "../assets/pageData/navbar.js";
//COMPONENTS
import { Link } from "react-router-dom";
import NavButton from "../components/NavButton.js";

/* Nav Bar Component
 * PROPS:
 * switchPage = function () => switches current page in App's state
 * selectedId = current selected page, string
 */
export default class NavBar extends React.Component {
  /* renders navbar component */
  constructor(props) {
    super(props);
    this.state = {
      pages: pageData.pages,
    };
  }
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
    console.log("selected", selected);
    return (
      <div className="navbar-container sticky">
        <Link to="/about">
          <img
            className="logo"
            onClick={() => this.forceUpdate()}
            src={images.logo}
            alt=""
          />
        </Link>
        <div className="nav-buttons">
          {this.state.pages.map((pageData) => {
            return (
              <Link to={"/" + pageData.url}>
                <NavButton
                  mobile={false}
                  pagename={pageData.title}
                  switchPage={() => {
                    this.forceUpdate();
                  }}
                  selected={selected == pageData.url}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
