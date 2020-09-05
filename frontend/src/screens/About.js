import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
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
    let aboutNavButtons = "about-nav-buttons";
    let navbar = <NavBar />;
    if (this.props.mobile) {
      carouselClass += "-m";
      homeOpener += " home-opener-m";
      homeParagraph += "-m";
      nameLogo += "-m";
      headerPhoto += "-m";
      graphics += "-m";
      statisticsClass += "-m";
      pieChart += "-m";
      aboutNavButtons += "-m";
      navbar = <MobileNavBar />;
    }

    return (
      <div className="home-container">
        <NavBar />
        <div className="carousel-container">
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
          <img className={nameLogo} alt="background" src={images.namelogo} />
        </div>
        <div className="home-sections-container">
          <div className={homeOpener}>{aboutText.mission}</div>
          <div className={aboutNavButtons}>
            <Link to="/team">
              <div
                onClick={() => {
                  this.forceUpdate();
                }}
                className="home-button"
              >
                Learn more about our team>
              </div>
            </Link>
            <Link to="/recruitment">
              <div className="home-button">Apply</div>
            </Link>
          </div>
          <SubButtons mobile={this.props.mobile} />
          <div className={homeParagraph}>{aboutText.biography}</div>

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
      </div>
    );
  }
}
