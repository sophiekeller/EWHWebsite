import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
//COMPONENTS
import SubButtons from "../components/SubButtons"
import images from "../assets/images/images.js"
//CONSTANTS
import { screenId } from "../constants.js";

/* About Page Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
*/
export default class About extends React.Component {
    render() {
        let homeOpener = "home-opener";
        let homeParagraph = "home-paragraph"
        let nameLogo = "name-logo"
        let headerPhoto = "header-photo"
        let carouselClass = "carousel-class"
        let graphics = "graphics-container"
        let statisticsClass = "home-stats-container"
        let piechart = "piechart-image"
        if (this.props.mobile){
            carouselClass = "carousel-class-m"
            homeOpener += " home-opener-m"
            homeParagraph = "home-paragraph-m"
            nameLogo = "name-logo-m"
            headerPhoto = "header-photo-m"
            graphics = "graphics-container-m"
            statisticsClass = "home-stats-container-m"
            piechart = "piechart-image-m"
      }
        return (
            <div className="home-container">
                <Carousel className = {carouselClass}>
                    <Carousel.Item className = "carousel">
                        <img
                            className={headerPhoto}
                            alt="background"
                            src= {images.carousel1}/>
                        <div className="header-gradient"/>
                        <img
                            className={nameLogo}
                            alt="background"
                            src= {images.namelogo}/>
                    </Carousel.Item>
                    <Carousel.Item className = "carousel">
                        <img
                            className={headerPhoto}
                            alt="background"
                            src= {images.carousel2}/>
                        <div className="header-gradient"/>
                        <img
                            className={nameLogo}
                            alt="background"
                            src= {images.namelogo}/>
                    </Carousel.Item>
                    <Carousel.Item className = "carousel">
                        <img
                            className={headerPhoto}
                            alt="background"
                            src= {images.carousel3}/>
                        <div className="header-gradient"/>
                        <img className={nameLogo}
                        alt="background"
                            src= {images.namelogo}/>
                    </Carousel.Item>
                </Carousel>
                <div className = "home-sections-container">
                    <div className={homeOpener}>{message1}</div>
                    <SubButtons mobile = {this.props.mobile}/>
                    <div className = {homeParagraph}>{message2}</div>
                    <Link to = "/team">
                        <div className = "home-link"
                            onClick={() => {
                                this.props.switchPage(screenId.team);}}>
                                Learn more about our team>
                        </div>
                    </Link>
                    <img className ="home-image" src = {images.group}/>
                    <div className = "home-graphs-title">EWH in Numbers</div>
                    <div className = {graphics}>
                        <div className = "home-graph-container">
                            <div className = "home-graph-label">Major Description</div>
                            <img className = {piechart} src = {images.graph}/>
                        </div>
                        <div className = {statisticsClass}>
                            {stats.map((stat, index) => {
                                if (stat!= null){
                                    return (
                                        <div className = "home-stat">
                                            <img className = "home-stat-image"
                                                src = {stat.image}/>
                                            <div className = "home-stat-number">
                                                {stat.number}
                                            </div>
                                            <div className = "home-stat-title">
                                                {stat.title}
                                            </div>
                                        </div>
                                    )}})}
                        </div>
                    </div>
                    <img className ="home-image" src = {images.homebottom}/>
                </div>
            </div>
        );


  }
}

const message1 = "Together, we strive to create meaningful impact through innovative technology solutions that target the world’s most pressing health issues."

const message2 = "Founded in 2012, the Cornell Engineering World Health (EWH) project team designs, constructs, and implements health solutions for underprivileged communities. Cornell EWH provides the ideal platform for students to develop both professionally and personally and deeply engage with the world around them. Although the members carry diverse academic interests and personal experiences, the multi-disciplinary team unites under the common goal of transforming the world through health technologies and welfare initiatives. Since its origin, Cornell EWH continues to delve into global challenges and turn ideas into reality."
const stats = [{number: 16, title: "Different Majors", image: images.briefcase},{number: 5, title: "Colleges Represented", image: images.capitol},{number: 41, title: "Members", image: images.people}]
