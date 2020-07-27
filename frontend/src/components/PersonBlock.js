import React from "react";
import prof_pics from "../assets/images/prof-pics/prof_pics.js"

export default class PersonBlock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        flipped : false
      };
    }
  render() {
    let person = this.props.data
    let image_title = person.name.toLowerCase().replace(/\s/g,'')
    let person_b_f = "person-block-front"
    let person_b_b = "person-block-back"
    let person_photo =  "person-photo"
    let info = "person-block-info"
    if (this.props.mobile){
        person_b_f = "person-block-front-m"
        person_photo =  "person-photo-m"
        person_b_b = "person-block-back-m"
        info = "person-block-info-m"
    }
    if (!this.state.flipped){
        return (
          <div className= {person_b_f} onClick={() => {this.setState({flipped: !this.state.flipped})}}>
            <img className = {person_photo} src = {prof_pics[image_title]}/>
            <div className = "person-fronttext">
                <div className = "person-block-boldtext center">{person.name}</div>
                <div className = "person-block-regtext center">{person.title}</div>
            </div>
          </div>
                );
    }else{
      return (
          <div className= {person_b_b} onClick={() => {this.setState({flipped: !this.state.flipped})}}>
            <div className = "person-block-boldtext center">{person.name}</div>
            <div className = "person-block-regtext center">{person.title}</div>
            <div className = {info}>
                <div className = "person-block-boldtext">Year</div>
                <div className = "person-block-regtext">{person.year}</div>
                <div className = "person-block-boldtext">Major</div>
                <div className = "person-block-regtext">{person.major}</div>
                <div className = "person-block-boldtext">Team Projects</div>
                <div className = "person-block-regtext">{person.projects}</div>
            </div>
          </div>
                );

  }
  }
}
// image code = <img className = "person-photo" src = {person.image}/>
