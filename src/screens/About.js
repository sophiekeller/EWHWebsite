import React from "react";

import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";
import Section from "../components/Section";

export default class About extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
      <div className="home-container">
        <Header photo={"about container!"} />
        <Section hasPhoto={false} myOtherFunProp={"section 1"} />
        <Section myOtherFunProp={"section 2"} />
      </div>
    );
  }
}
