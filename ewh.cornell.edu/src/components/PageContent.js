import React from "react";

//COMPONENTS
import Section from "../components/Section.";

export default class PageContent extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
      <>
        <Section {...this.props} />
      </>
    );
  }
}
