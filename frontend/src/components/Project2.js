import React from "react";
import images from "../assets/images/images.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PersonBlock from "./PersonBlock.js"

export default class Project2 extends React.Component {
        constructor(props) {
          super(props);
          this.handleModalShow = this.handleModalShow.bind(this);
    	  this.handleModalClose = this.handleModalClose.bind(this);
          this.handleOverlayShow = this.handleOverlayShow.bind(this);
    	  this.handleOverlayClose = this.handleOverlayClose.bind(this);
          this.state = {
            show_modal: false,
            show_overlay: false,
            current : this.props.current,
            data: this.props.data,
            map: {"Research": '#91F5AD', "Design": '#F896D8', "Software": '#A77DFF'}
          };
        }

        handleModalClose() {
    		this.setState({ show_modal: false });
    	}
    	handleModalShow() {
    		this.setState({ show_modal: true });
    	}
        handleOverlayClose() {
    		this.setState({ show_overlay: false });
    	}
    	handleOverlayShow() {
    		this.setState({ show_overlay: true });
    	}

      render() {
          let data = this.state.data
          let bar = (<div></div>)
          let stats = (<div></div>)
          let container_class = "project-container2"
          let photo_des = "photo-description-container2"
          let photo = "project-photo2"
          if (this.props.mobile){
              photo = "project-photo2-m"
              container_class = 'project-container2-m'
          }
        if (this.state.current){
            container_class = container_class + " current-project2"
        }else{
            container_class = container_class + " past-project2"
            stats = (
                <div className = "project-stats2">
                    {data.stats.map((stat, index) => {
                        if (stat!= null){
                            return (
                                <div className = "project-stat2">
                                    <div className = "project-stat-number2">{stat[0]}</div>
                                    <div className = "project-stat-category2">{stat[1]}</div>
                                </div>)}})}
                </div>
            )
            bar = (<div>
                        <div variant="primary" onClick={this.handleModalShow} className = "past-bar2 project-bar2">Read More</div>
                        <Modal size="lg" show={this.state.show_modal} onHide={this.handleModalClose}>
                            <div closeButton/>
                            <img className = "project-modal-pic" src = {images.header1}/>
                            <Modal.Header >
                                <Modal.Title>
                                    <div className = "project-modal-title-container2">
                                    <div className = "projects-title2">{data.title}</div>
                                    <div className = "modal-project-teams-container2">
                                        <div className = "project-teams2">
                                            {data.subteams.map((team, index) => {
                                                if (team!= null){
                                                    console.log("color", this.state.map[team])
                                                    return (
                                                        <div className = "project-subteam-bubble2" style ={{background:this.state.map[team]}}>{team}</div>)}})}
                                        </div>
                                    </div>
                                    </div>
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className = "project-text2">
                                        <div className = "project-description2">{data.info_long}</div>
                                    </div>
                                    <div className = "modal-members2">
                                        <div className = "project-title2">Team Members</div>
                                        <div className = "modal-members-blocks2">
                                        {data.members.map((person, index) => {
                                            if (person!= null){
                                                return (<PersonBlock data = {person} /> )}})}
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <div variant="primary" onClick={this.handleModalClose} className = "project-modal-close-bar2">Close</div>
                                </Modal.Footer>
                        </Modal>
                    </div>
                    )
        }

        return (
            <div className = {container_class}>
                <div onMouseEnter={() => {this.handleOverlayShow()}} onMouseLeave= {() => {this.handleOverlayClose()}} className = {photo_des}>
                    <img className = {photo} src = {images.project}/>
                    {this.state.show_overlay && (<div className = "project-description2">{data.info}</div>)}
                </div>
                <div className = "project-text2">
                <div className = "project-title2">{data.title}</div>
                <div className = "project-teams2">
                {data.subteams.map((team, index) => {
                    if (team!= null){
                        console.log("color", this.state.map[team])
                        return (
                            <div className = "project-subteam-bubble2" style ={{background:this.state.map[team]}}>{team}</div>)}})}

                </div>
                    {bar}
                </div>

            </div>
        )
    }
    }
    //
    // old button = <div onClick = {this.handleModalClose} className = "past-bar project-bar ">Read More</div>
