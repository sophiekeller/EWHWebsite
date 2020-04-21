import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-title">Cornell Engineering World Health</div>
        <div
          className="navbar-subtitle"
          onClick={() => {
            //navigate
          }}
        >
          Sign Out
        </div>
        <div
          className="navbar-subtitle"
          onClick={() => {
            //navigate
          }}
        >
          Projects
        </div>
        <div
          className="navbar-subtitle"
          onClick={() => {
            //navigate
          }}
        >
          Contact Us
        </div>
      </div>
    );
  }
}
