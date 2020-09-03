import React from "react";
import { screenId } from "../constants.js";
import images from "../assets/images/navbarImages/navbarImages.js";
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
  render() {
    let pageData = [
      {
        title: "About Us",
        image: "about",
      },
      {
        title: "Our Team",
        image: "team",
      },
      {
        title: "Projects",
        image: "projects",
      },
      {
        title: "Contact Us",
        image: "contact",
      },
      {
        title: "Recruitment",
        image: "recruitment",
      },
    ];
    return (
      <div className="navbar-container sticky">
        <Link to="/">
          <img
            className="logo"
            onClick={() => this.props.switchPage(screenId.about)}
            src={images.logo}
            alt=""
          />
        </Link>
        <div className="nav-buttons">
          {pageData.map((data) => {
            return (
              <Link to={"/" + data.image}>
                <NavButton
                  mobile={false}
                  pagename={data.title}
                  switchPage={() => {
                    this.props.switchPage(screenId[data.image]);
                  }}
                  selected={screenId[data.image] === this.props.selectedId}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
