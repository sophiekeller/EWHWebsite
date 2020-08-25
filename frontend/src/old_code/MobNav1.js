import React from "react";
import { screenId } from "../constants.js";
import {Navbar, Nav, NavDropdown, Form, FormControl,Button} from 'react-bootstrap';
import NavButton from "../components/NavButton.js";
import images from "../assets/images/images.js";

/*
think about how we can make this component better
(look at all the duplicate code and see if we can factor that out!)

you also might want to group About Us, Our Team, and Projects together in a
div so they all
*/
export default class MobNav extends React.Component {
  render() {
    return (
      <div className="mobnav-container">
      <Navbar className = "mobnav-custom" expand="lg">
      <img
        className="logo"
        onClick = {() => this.props.switchPage(screenId.about)}
        src={images.logo}
        alt="" />
        <Navbar.Toggle className = "nav-toggle" aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
            <div className = "collapse-container">
            <NavButton
              mobile = {true}
              pagename={"About Us"}
              switchPage={() => {
                this.props.switchPage(screenId.about);
              }}
              selected={screenId.about === this.props.selectedId}
            />
            <NavButton
              mobile = {true}
              pagename={"Our Team"}
              switchPage={() => {
                this.props.switchPage(screenId.team);
              }}
              selected={screenId.team === this.props.selectedId}
            />
            <NavButton
              mobile = {true}
              pagename={"Projects"}
              switchPage={() => {
                this.props.switchPage(screenId.projects);
              }}
              selected={screenId.projects === this.props.selectedId}
            />
            <NavButton
              mobile = {true}
              pagename={"Contact Us"}
              switchPage={() => {
                this.props.switchPage(screenId.contact);
              }}
              selected={screenId.contact === this.props.selectedId}
            />
            </div>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}
