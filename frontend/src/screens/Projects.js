import React from "react";

import headerPhotos from "../assets/images/headerImages/headerImages.js";
import projects from "../assets/projects.json";

//COMPONENTS
import Header from "../components/Header";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

/* Projects Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Projects extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current_projects: projects.current_projects,
      past_projects: projects.past_projects,
    };
  }

  /* renders projects page */
  render() {
    let current = this.state.current_projects;
    let past = this.state.past_projects;
    let cont = "projects-blocks-container";
    if (this.props.mobile) {
      cont = "projects-blocks-container-m";
    }
    return (
      <div className="home-container">
        <Header
          mobile={this.props.mobile}
          photo={headerPhotos.projectHeader}
          title="Projects"
        />
        <div className="sections-container">
          <div className="current-projects-container">
            <div className="projects-title">Current Projects</div>
            <div className={cont}>
              {current.map((project, index) => {
                return (
                  <Project
                    mobile={this.props.mobile}
                    data={project}
                    current={true}
                  />
                );
              })}
            </div>
          </div>
          <div className="past-projects-container">
            <div className="projects-title">Past Projects</div>
            <div className={cont}>
              {past.map((project, index) => {
                return (
                  <Project
                    mobile={this.props.mobile}
                    data={project}
                    current={false}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
