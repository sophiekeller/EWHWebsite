import React from "react";

import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";
import Section from "../components/Section";

export default class Contact extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
        <div className="home-container">
          <Header photo={images.homepic} state={this.state}/>
          <div className="sections-container">
              <Section title={"First"} text={"Hello"} state={this.state}/>
              <Section title={"Second"} text={"Hello"} state={this.state}/>
          </div>
        </div>
    );
  }
}
