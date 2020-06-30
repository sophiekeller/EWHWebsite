import React from "react";

import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";
import Section from "../components/Section";

export default class Projects extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        leads: [nadine, nadine, nadine, nadine, nadine],
        team: [nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine, nadine],
        filter: "All",
        all_filters: ["All", "Business", "Design", "Software", "Electrical", "Integrative Design", "Research"]
      };
    }
  render() {
    //notation passes along all props from the Home component to child components
    return (
        <div className="home-container">
          <Header photo={images.homepic} title = "Projects"/>
          <div className="sections-container">
              <div className = "current-projects-container">
                <div className = "projects-title">Current Projects</div>
                <div className = "projects-blocks-container">
                </div>
              </div>
              <div className = "past-projects-container">
                <div className = "projects-title">Past Projects</div>
                <div classNAme = "projects-blocks-container">
                </div>
              </div>
          </div>
        </div>
    );
  }
}
var example = {title: "Menstrual Health App", subteams: ["Research", "Design", "Software"], info: "An online tool to streamline the application process for researchers intending on beginning clinical trials."}
