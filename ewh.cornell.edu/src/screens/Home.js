import React from "react";

//COMPONENTS
import Navbar from "../components/Navbar";
import PageContent from "../components/PageContent";

export default class Home extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
      <>
        <Navbar {...this.props} />
        <PageContent {...this.props} />
      </>
    );
  }
}
