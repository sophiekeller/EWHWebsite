import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
//COMPONENTS
import SubButtons from "../components/SubButtons";
import images from "../assets/images/images.js";
import carousel from "../assets/images/carousel/carousel.js";
//CONSTANTS
import { screenId } from "../constants.js";

/* About Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class About extends React.Component {
  render() {
    let homeOpener = "home-opener";
    let homeParagraph = "home-paragraph";
    let nameLogo = "name-logo";
    let headerPhoto = "header-photo";
    let carouselClass = "carousel-class";
    let graphics = "graphics-container";
    let statisticsClass = "home-stats-container";
    let pieChart = "piechart-image";
    console.log("carousel", typeof carousel);
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
          {Object.keys(carousel).map((photo) => {
            console.log(carousel[photo]);
            return (
              <CarouselItem
                src={carousel[photo]}
                header={headerPhoto}
                name={nameLogo}
              />
            );
          })}
        </Carousel>
        <div className="home-sections-container">
          <div className={homeOpener}>{message1}</div>
          <SubButtons mobile={this.props.mobile} />
          <div className={homeParagraph}>{message2}</div>
          <Link to="/team">
            <div
              className="home-link"
              onClick={() => {
                this.props.switchPage(screenId.team);
              }}
            >
              Learn more about our team>
            </div>
          </Link>
          <img className="home-image" src={images.group} />
          <div className="home-graphs-title">EWH in Numbers</div>
          <div className={graphics}>
            <div className="home-graph-container">
              <div className="home-graph-label">Major Description</div>
              <img className={pieChart} src={images.graph} />
            </div>
            <div className={statisticsClass}>
              {stats.map((stat, index) => {
                if (stat != null) {
                  return (
                    <div className="home-stat">
                      <img className="home-stat-image" src={stat.image} />
                      <div className="home-stat-number">{stat.number}</div>
                      <div className="home-stat-title">{stat.title}</div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <img className="home-image" src={images.homebottom} />
        </div>
      </div>
    );
  }
}

function CarouselItem(props) {
  console.log("p", props);
  return (
    <Carousel.Item className="carousel">
      <img className={props.header} alt="background" src={carousel.tinkering} />
      <div className="header-gradient" />
      <img className={props.name} alt="background" src={images.namelogo} />
    </Carousel.Item>
  );
}

const message1 =
  "Together, we strive to create meaningful impact through innovative technology solutions that target the world’s most pressing health issues.";

const message2 =
  "Founded in 2012, the Cornell Engineering World Health (EWH) project team designs, constructs, and implements health solutions for underprivileged communities. Cornell EWH provides the ideal platform for students to develop both professionally and personally and deeply engage with the world around them. Although the members carry diverse academic interests and personal experiences, the multi-disciplinary team unites under the common goal of transforming the world through health technologies and welfare initiatives. Since its origin, Cornell EWH continues to delve into global challenges and turn ideas into reality.";
const stats = [
  { number: 16, title: "Different Majors", image: images.briefcase },
  { number: 5, title: "Colleges Represented", image: images.capitol },
  { number: 41, title: "Members", image: images.people },
];
