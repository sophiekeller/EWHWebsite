import React from "react";
import Carousel from 'react-bootstrap/Carousel';

//COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubButtons from "../components/SubButtons"
import images from "../assets/images/images.js"

//CONSTANTS
import { screenId } from "../constants.js";

export default class About extends React.Component {
  render() {
      let homeopener = "home-opener";
      let home_p = "home-paragraph"
      let name_logo = "name-logo"
      let header_photo = "header-photo"
      let carousel_class = "carousel-class"
      let graphics = "graphics-container"
      let stats_class = "home-stats-container"
      let piechart = "piechart-image"
      if (this.props.mobile){
          carousel_class = "carousel-class-m"
          homeopener += " home-opener-m"
          home_p = "home-paragraph-m"
          name_logo = "name-logo-m"
          header_photo = "header-photo-m"
          graphics = "graphics-container-m"
          stats_class = "home-stats-container-m"
          piechart = "piechart-image-m"
      }
    return (
      <div className="home-container">
      <Carousel className = {carousel_class}>
        <Carousel.Item className = "carousel">
             <img
              className={header_photo}
              alt="background"
              src= {images.carousel1}/>
             <div className="header-gradient"/>
             <img className={name_logo}
              alt="background"
              src= {images.namelogo}/>
        </Carousel.Item>
        <Carousel.Item className = "carousel">
             <img
              className={header_photo}
              alt="background"
              src= {images.carousel2}/>
             <div className="header-gradient"/>
             <img className={name_logo}
              alt="background"
              src= {images.namelogo}/>
        </Carousel.Item>
        <Carousel.Item className = "carousel">
             <img
              className={header_photo}
              alt="background"
              src= {images.carousel3}/>
             <div className="header-gradient"/>
             <img className={name_logo}
              alt="background"
              src= {images.namelogo}/>
        </Carousel.Item>
        </Carousel>
        <div className = "home-sections-container">
            <div className={homeopener}>{message1}</div>
            <SubButtons mobile = {this.props.mobile}/>
            <div className = {home_p}>{message2}</div>
            <div onClick={() => {this.props.switchPage(screenId.team);}} className = "home-link">Learn more about our team ></div>
            <img className ="home-image" src = {images.group}/>
            <div className = "home-graphs-title">EWH in Numbers</div>
            <div className = {graphics}>
                <div className = "home-graph-container">
                    <div className = "home-graph-label">Major Description</div>
                    <img className = {piechart} src = {images.graph}/>
                    </div>
                <div className = {stats_class}>
                    {stats.map((stat, index) => {
                        if (stat!= null){
                            return (
                                <div className = "home-stat">
                                    <img className = "home-stat-image" src = {stat.image}/>
                                    <div className = "home-stat-number">{stat.number}</div>
                                    <div className = "home-stat-title">{stat.title}</div>
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
// old header = <Header photo={images.homepic} title = "About"/>
const message1 = "Together, we transform the world through innovative and meaningful health technology solutions that promote human welfare."

const message2 = "Founded in 2012, the Cornell Engineering World Health (EWH) project team designs, constructs, and implements health solutions for underprivileged communities. Cornell EWH provides the ideal platform for students to develop both professionally and personally and deeply engage with the world around them. Although the members carry diverse academic interests and personal experiences, the multi-disciplinary team unites under the common goal of transforming the world through health technologies and welfare initiatives. Since its origin, Cornell EWH continues to delve into global challenges and turn ideas into reality."
const stats = [{number: 16, title: "Different Majors", image: images.briefcase},{number: 5, title: "Colleges Represented", image: images.capitol},{number: 41, title: "Members", image: images.people}]
