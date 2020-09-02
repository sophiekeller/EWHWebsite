import React from "react";
import images from "../assets/images/images.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PersonBlock from "./PersonBlock.js"

export default class Project extends React.Component {
        constructor(props) {
          super(props);
          this.handleShow = this.handleShow.bind(this);
    	  this.handleClose = this.handleClose.bind(this);
          this.state = {
            show: false,
            current : this.props.current,
            data: this.props.data
          };
        }

        handleClose() {
    		this.setState({ show: false });
    	}

    	handleShow() {
    		this.setState({ show: true });
    	}

      render() {
          let data = this.state.data
          let bar = (<div></div>)
          let stats = (<div></div>)
          let containerClass = "project-container"
        if (this.state.current){
            bar = (<div className = "current-bar project-bar">IN PROGRESS</div>)
            containerClass = containerClass + " current-project"
        }else{
            containerClass = containerClass + " past-project"
            stats = (
                <div className = "project-stats">
                    {data.stats.map((stat, index) => {
                        if (stat!= null){
                            return (
                                <div className = "project-stat">
                                    <div className = "project-stat-number">{stat[0]}</div>
                                    <div className = "project-stat-category">{stat[1]}</div>
                                </div>)}})}
                </div>
            )
            bar = (<div>
                        <div variant="primary" onClick={this.handleShow} className = "past-bar project-bar">Read More</div>
                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                            <div closeButton/>
                            <img className = "project-modal-pic" src = {images.header1}/>
                            <Modal.Header >
                                <Modal.Title>
                                    <div className = "project-modal-title-container">
                                    <div className = "projects-title">{data.title}</div>
                                    <div className = "modal-project-teams-container">
                                        <div className = "project-teams">
                                            {data.subteams.map((team, index) => {
                                                if (team!= null){
                                                    return (
                                                        <div className = "project-subteam-bubble">{team}</div>)}})}
                                        </div>
                                    </div>
                                    </div>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className = "project-text">
                                        <div className = "project-description">{data.info_long}</div>
                                    </div>
                                    <div className = "modal-members">
                                        <div className = "project-title">Team Members</div>
                                        <div className = "modal-members-blocks">
                                        {data.members.map((person, index) => {
                                            if (person!= null){
                                                return (<PersonBlock data = {person} /> )}})}
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div variant="primary" onClick={this.handleClose} className = "project-modal-close-bar">Close</div>
                                </Modal.Footer>
                        </Modal>
                    </div>
                    )
        }
        return (
            <div className = {containerClass}>
                <img className = "project-photo" src = {images.project}/>
                <div className = "project-text">
                <div className = "project-title">{data.title}</div>
                <div className = "project-teams">
                    {data.subteams.map((team, index) => {
                        if (team!= null){
                            return (
                                <div className = "project-subteam-bubble">{team}</div>)}})}
                </div>
                <div className = "project-description">{data.info}</div>
                </div>
                {stats}
                {bar}
            </div>
        )
    }
    }
    //
    // old button = <div onClick = {this.handleClose} className = "past-bar project-bar ">Read More</div>
