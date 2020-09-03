import React from "react";
//ASSETS
import { screenId } from "../constants.js";
import images from "../assets/images/navbarImages/navbarImages.js";
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
    };
  }
  /* renders mobile nav bar */
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
      <div className="mobnav-container">
        <div className="mobnav-top-row">
          <Link to="/">
            <img
              className="mobnav-logo"
              src={images.logo}
              onClick={() => {
                this.props.switchPage(screenId.about);
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
              {pageData.map((data) => {
                return (
                  <Link to={"/" + data.image}>
                    <NavButton
                      mobile={true}
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
        )}
      </div>
    );
  }
}
