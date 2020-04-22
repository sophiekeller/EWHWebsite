//unless you're emotionally attached to this file, we probably don't need it :)
//it's currently not used
import React from "react";

//COMPONENTS
import Section from "../components/Section.js";

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
