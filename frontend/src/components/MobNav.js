import React from "react";
//ASSETS
import { screenId } from "../constants.js";
import images from "../assets/images/images.js";
//COMPONENTS
import {Link} from "react-router-dom";
import NavButton from "../components/NavButton.js";


/* Mobile Navigation Bar Component
* PROPS:
* switchPage = function () => switches current page in App's state
* selectedId = current selected page, string
*/
export default class MobNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false //if menu is open
        };
    }
    /* renders mobile nav bar */
    render() {
        return (
            <div className="mobnav-container">
                <div className="mobnav-top-row">
                    <Link to="/">
                        <img className="mobnav-logo"
                            src={images.logo}
                            onClick={() => {
                              this.props.switchPage(screenId.about);
                            }}
                            alt="" />
                    </Link>
                    <img
                        className="menu-button"
                        onClick = {() => {this.setState(function(state){return({open: !state.open})})}}
                        src={images.menu}
                        alt="" />
                </div>
                {(this.state.open) &&( //renders buttons only if open
                    <div className = "mobnav-buttons-container">
                        <div className = "collapse-container">
                            <Link to="/">
                                <NavButton
                                  mobile = {true}
                                  pagename={"About Us"}
                                  switchPage={() => {
                                    this.props.switchPage(screenId.about);
                                  }}
                                  selected={screenId.about === this.props.selectedId}
                                />
                            </Link>
                            <Link to="/team">
                                <NavButton
                                  mobile = {true}
                                  pagename={"Our Team"}
                                  switchPage={() => {
                                    this.props.switchPage(screenId.team);
                                  }}
                                  selected={screenId.team === this.props.selectedId}
                                />
                            </Link>
                            <Link to="/projects">
                                <NavButton
                                  mobile = {true}
                                  pagename={"Projects"}
                                  switchPage={() => {
                                    this.props.switchPage(screenId.projects);
                                  }}
                                  selected={screenId.projects === this.props.selectedId}
                                />
                            </Link>
                            <Link to="/contact">
                                <NavButton
                                  mobile = {true}
                                  pagename={"Contact Us"}
                                  switchPage={() => {
                                    this.props.switchPage(screenId.contact);
                                  }}
                                  selected={screenId.contact === this.props.selectedId}
                                />
                            </Link>
                        </div>
                    </div>
                )}
          </div>
        );
  }
}
