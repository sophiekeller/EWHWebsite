import React from "react";

//COMPONENTS
import PageContent from "../components/PageContent";
import Header from "../components/Header";
import Section from "../components/Section";

export default class About extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
      <div className="home-container">
        <Header myFunProp={"about container!"} />
        <Section myOtherFunProp={"section 1"} />
        <Section myOtherFunProp={"section 2"} />
      </div>
    );
  }
}
