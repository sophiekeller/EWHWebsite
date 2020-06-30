import React from "react";
import images from "../assets/images/images.js"

export default class Project extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            current : this.props.current,
            data: this.props.data
          };
        }

      render() {
          let data = this.state.data
          let bar = (<div></div>)
          let stats = (<div></div>)
          let container_class = "project-container"
        if (this.state.current){
            bar = (<div className = "current-bar project-bar">IN PROGRESS</div>)
            container_class = container_class + " current-project"
        }else{
            bar = (<div className = "past-bar project-bar ">Read More</div>)
            container_class = container_class + " past-project"
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
        }
        return (
            <div className = {container_class}>
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
