import React from "react";
//ASSETS
import images from "../assets/images/images.js"
//COMPONENTS
import PersonBlock from "./PersonBlock.js";
import ProjectModal from '../components/ProjectModal.js'

/* Project Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
* data = project object to render data of
* currentProject = if this project is a currentProject project
*/
export default class Project2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showOverlay: false,
            currentProject: this.props.currentProject,
            data: this.props.data,
            map: {"Research": '#91F5AD', "Design": '#F896D8', "Software": '#A77DFF'}
          };
        }

    /* closes modal */
    handleModalClose = () => {
    	this.setState({ showModal: false });
    	}

    /* opens modal */
    handleModalShow = () => {
    	this.setState({ showModal: true });
    	}

    /* closes overlay */
    handleOverlayClose = () => {
    	this.setState({ showOverlay: false });
    	}

    /* opens overlay */
    handleOverlayShow = () => {
    	this.setState({ showOverlay: true });
    	}

    /* renders project component */
    render() {
        let data = this.state.data
        let bar = (<div></div>)
        let stats = (<div></div>)
        let containerClass = "project-container2"
        let photoDescription = "photo-description-container2"
        let photo = "project-photo2"
        if (this.props.mobile){
            photo = "project-photo2-m"
            containerClass = 'project-container2-m'
        }
        if (this.state.currentProject){
            containerClass = containerClass + " currentProject-project2"
        }else{ //add stats and read more bar if past project
            containerClass = containerClass + " past-project2"
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
                        <ProjectModal data = {this.state.data}
                            map = {this.state.map}/>
                    </div>
                    )
        }
        return (
            <div className = {containerClass}>
                <div onMouseEnter={() => {this.handleOverlayShow()}}
                    onMouseLeave= {() => {this.handleOverlayClose()}}
                    className = {photoDescription}>
                        <img className = {photo} src = {images.project}/>
                        {this.state.showOverlay && (
                            <div className = "project-description2">
                                {data.info}
                            </div>)}
                </div>
                <div className = "project-text2">
                    <div className = "project-title2">{data.title}</div>
                    <div className = "project-teams2">
                        {data.subteams.map((team, index) => {
                            if (team!= null){
                                return (
                                    <div className = "project-subteam-bubble2"
                                        style ={{background:this.state.map[team]}}>
                                        {team}
                                    </div>)}})}
                    </div>
                    {bar}
                </div>
            </div>
        )
    }
}
