import React from "react";

export default class Header extends React.Component {
  render() {
    return (
        <div className="header-container">
            <img
                className = "header-image"
                src = {this.props.photo}
                alt = ""/>
        </div>
    )
  }
}
