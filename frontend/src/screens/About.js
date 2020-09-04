import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
//COMPONENTS
import SubButtons from "../components/SubButtons";
import images from "../assets/images/aboutImages/aboutImages.js";
import aboutText from "../assets/pageData/about.js";
import carousel from "../assets/images/carousel/carousel.js";
//CONSTANTS
import { screenId } from "../constants.js";

/* About Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: Object.keys(carousel),
    };
  }
  render() {
    let homeOpener = "home-opener";
    let homeParagraph = "home-paragraph";
    let nameLogo = "name-logo";
    let headerPhoto = "header-photo";
    let carouselClass = "carousel-class";
    let graphics = "graphics-container";
    let statisticsClass = "home-stats-container";
    let pieChart = "piechart-image";
    if (this.props.mobile) {
      carouselClass = "carousel-class-m";
      homeOpener += " home-opener-m";
      homeParagraph = "home-paragraph-m";
      nameLogo = "name-logo-m";
      headerPhoto = "header-photo-m";
      graphics = "graphics-container-m";
      statisticsClass = "home-stats-container-m";
      pieChart = "piechart-image-m";
    }

    return (
      <div className="home-container">
        <Carousel className={carouselClass}>
          {this.state.carouselImages.map((image) => {
            return (
              <Carousel.Item className="carousel">
                <CarouselItem
                  headerPhoto={headerPhoto}
                  mainPhoto={carousel[image]}
                  nameLogo={nameLogo}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className="home-sections-container">
          <div className={homeOpener}>{aboutText.mission}</div>
          <SubButtons mobile={this.props.mobile} />
          <div className={homeParagraph}>{aboutText.biography}</div>
          <div className="about-nav-buttons">
            <Link to="/team">
              <div className="home-link">Learn more about our team></div>
            </Link>
            <Link to="/recruitment">
              <div className="home-button">Apply</div>
            </Link>
          </div>
          <img className="home-image" src={images.group} />
          <div className="home-graphs-title">EWH in Numbers</div>
          <div className={graphics}>
            <div className="home-graph-container">
              <div className="home-graph-label">Our Majors</div>
              <img className={pieChart} src={images.graph} />
            </div>
            <div className={statisticsClass}>
              {aboutText.stats.map((stat, index) => {
                return (
                  <div className="home-stat">
                    <img className="home-stat-image" src={stat.image} />
                    <div className="home-stat-number">{stat.number}</div>
                    <div className="home-stat-title">{stat.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <img className="home-image" src={images.homebottom} />
        </div>
      </div>
    );
  }
}

class CarouselItem extends React.Component {
  render() {
    return (
      <div>
        <img
          className={this.props.headerPhoto}
          alt="background"
          src={this.props.mainPhoto}
        />
        <div className="header-gradient" />
        <img
          className={this.props.nameLogo}
          alt="background"
          src={images.namelogo}
        />
      </div>
    );
  }
}
