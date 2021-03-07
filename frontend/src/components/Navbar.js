import React from "react";
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
      selected: this.getSelected(),
    };
  }
  componentDidMount() {
    let selected = this.getSelected();
    this.setState({ selected: selected });
  }

  getSelected() {
    let link = window.location.href;
    let current = null;
    pageData.pages.forEach((page) => {
      if (link.includes(page.url)) {
        current = page.url;
      }
    });
    if (!current) {
      current = "about";
    }
    return current;
  }

  render() {
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
          {this.state.pages.map((page) => {
            return (
              <Link to={"/" + page.url} style={{ textDecoration: "none" }}>
                <NavButton
                  mobile={false}
                  pagename={page.title}
                  switchPage={() => {
                    this.forceUpdate();
                  }}
                  selected={this.state.selected === page.url}
                />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
