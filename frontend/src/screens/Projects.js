import React, {useState} from "react";

import images from "../assets/images/images.js"
import data from "../assets/data.json"

//COMPONENTS
import Header from "../components/Header";
import Project from "../components/Project";
import ProjectModal from "../components/ProjectModal";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default class Projects extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
	  this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false,
        current_projects: data.past_projects,
        past_projects: data.past_projects
      };
    }

    handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}
  render() {
    let current = this.state.current_projects
    let past = this.state.past_projects
    //notation passes along all props from the Home component to child components
    return (
        <div className="home-container">
          <Header photo={images.header1} title = "Projects"/>
          <div className="sections-container">
              <div className = "current-projects-container">
                <div className = "projects-title">Current Projects</div>
                <div className = "projects-blocks-container">
                    {current.map((project, index) => {
                        if (project!= null){
                            return (
                                <Project data = {project} current = {true}/>)}})}
                </div>
              </div>
              <div className = "past-projects-container">
                <div className = "projects-title">Past Projects</div>
                <div className = "projects-blocks-container">
                    {past.map((project, index) => {
                        if (project!= null){
                            return (
                                <Project data = {project} current = {false}/>)}})}
                </div>
              </div>
          </div>
        </div>
    );
  }
}
var example = {title: "Menstrual Health App", subteams: ["Research", "Design", "Software"], info: "An online tool to streamline the application process for researchers intending on beginning clinical trials.",stats: [[10,"Members"],[2,"Semesters"], [7,"Collaborators"]]}
