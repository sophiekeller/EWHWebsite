import React from "react";
import { screenId } from "../constants.js";
import images from "../assets/images/images.js";
//COMPONENTS
import {Link} from "react-router-dom";
import NavButton from "../components/NavButton.js";


/* Nav Bar Component
* PROPS:
* switchPage = function () => switches current page in App's state
* selectedId = current selected page, string
*/
export default class NavBar extends React.Component {
    /* renders navbar component */
     render() {
        return (
            <div className="navbar-container sticky">
                <Link to = "/">
                    <img className="logo"
                      onClick = {() => this.props.switchPage(screenId.about)}
                      src={images.logo}
                      alt="" />
                </Link>
                <div className="nav-buttons">
                    <Link to="/">
                        <NavButton
                          mobile = {false}
                          pagename={"About Us"}
                          switchPage={() => {
                            this.props.switchPage(screenId.about);
                          }}
                          selected={screenId.about === this.props.selectedId}
                        />
                    </Link>
                    <Link to="/team">
                        <NavButton
                          mobile = {false}
                          pagename={"Our Team"}
                          switchPage={() => {
                            this.props.switchPage(screenId.team);
                          }}
                          selected={screenId.team === this.props.selectedId}
                        />
                    </Link>
                    <Link to="/projects">
                        <NavButton
                          mobile = {false}
                          pagename={"Projects"}
                          switchPage={() => {
                            this.props.switchPage(screenId.projects);
                          }}
                          selected={screenId.projects === this.props.selectedId}
                        />
                    </Link>
                    <Link to="/contact">
                        <NavButton
                          mobile = {false}
                          pagename={"Contact Us"}
                          switchPage={() => {
                            this.props.switchPage(screenId.contact);
                          }}
                          selected={screenId.contact === this.props.selectedId}
                        />
                    </Link>
                </div>
              </div>
        );
  }
}
