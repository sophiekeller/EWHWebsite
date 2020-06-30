import React from "react";

//COMPONENTS
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import SubButtons from "../components/SubButtons"
import images from "../assets/images/images.js"

export default class About extends React.Component {
  render() {
    //notation passes along all props from the Home component to child components
    return (
      <div className="home-container">
        <Header photo={images.homepic} title = "About"/>
        <div className="sections-container">
            <Section title={"Mission"} text={message1} state={this.state}/>
            <SubButtons/>
            <Section title={"Who We Are"} text={message2} hasPhoto={true} photo={images.group} state={this.state}/>
        </div>
      </div>
    );


  }
}

const message1 = "Transform the world through innovative and meaningful health technology solutions that promote human welfare. Create meaningful impact through innovative technology solutions that target the world’s most pressing health issues."

const message2 = "Founded in 2012, the Cornell Engineering World Health (EWH) project team designs, constructs, and implements health solutions for underprivileged communities. Cornell EWH provides the ideal platform for students to develop both professionally and personally and deeply engage with the world around them. Although the members carry diverse academic interests and personal experiences, the multi-disciplinary team unites under the common goal of transforming the world through health technologies and welfare initiatives. Since its origin, Cornell EWH continues to delve into global challenges and turn ideas into reality."
