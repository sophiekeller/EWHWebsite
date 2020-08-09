import React from "react";
import images from "../assets/images/images.js"
//COMPONENTS
import Modal from 'react-bootstrap/Modal';
import PersonBlock from "./PersonBlock.js";
import collaborators from "../assets/images/institutions/institutions.js"

/* Project Modal Component for Project Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
*/
export default class ProjectModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showModal: false,
            data: this.props.data
          };
        }

    /* closes modal */
    handleClose = () => {
    	this.setState({ showModal: false });
    }

    /* opens modal */
    handleShow = () => {
    	this.setState({ showModal: true });
    }

    /* renders modal component */
    render() {
        let data = this.props.data;
        return (
            <div className = "project-modal-container">
                <div className = "past-bar2 project-bar2"
                    variant="primary"
                    onClick={this.handleShow}>
                    Read More
                </div>
                <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
                    <div closeButton/>
                        <img className = "project-modal-pic" src = {images.header1}/>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <div className = "project-modal-title-container2">
                                    <div className = "projects-title2">{data.title}</div>
                                    <div className = "modal-project-teams-container2">
                                        <div className = "project-teams2">
                                            {data.subteams.map((team, index) => {
                                                if (team!= null){
                                                    return (
                                                        <div
                                                            className = "project-subteam-bubble2"
                                                            style ={{background:this.props.map[team]}}>
                                                            {team}
                                                        </div>)}})}
                                        </div>
                                </div>
                            </div>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className = "project-text2">
                                <div className = "project-modal-description">
                                    {data.info_long}
                                </div>
                            </div>
                            <div className = "modal-members2">
                                <div className = "project-title2">Team Members</div>
                                <div className = "modal-members-blocks2">
                                    {data.members.map((person, index) => {
                                        if (person!= null){
                                            return (
                                                <PersonBlock mobile = {this.props.mobile}
                                                    data = {person} /> )}})}
                                </div>
                            </div>
                            <div className = "project-title2">Collaborators</div>
                            {data.collaborators.map((collaborator, index) => {
                                return (
                                    <img className = "collaborator-image"
                                        src = {collaborators[collaborator]}/>)
                            })}
                        </Modal.Body>
                        <Modal.Footer>
                            <div className = "project-modal-close-bar2"
                                variant="primary"
                                onClick={this.handleClose} >
                                Close
                            </div>
                        </Modal.Footer>
                </Modal>
            </div>
        );
    }
    }
