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
    if (!this.state.flipped){
        return (
          <div className= "person-block-front"onClick={() => {this.setState({flipped: !this.state.flipped})}}>
            <img className = "person-photo" src = {prof_pics[image_title]}/>
            <div className = "person-fronttext">
                <div className = "person-block-boldtext center">{person.name}</div>
                <div className = "person-block-regtext center">{person.title}</div>
            </div>
          </div>
                );
    }else{
      return (
          <div className= "person-block-back" onClick={() => {this.setState({flipped: !this.state.flipped})}}>
            <div className = "person-block-boldtext center">{person.name}</div>
            <div className = "person-block-regtext center">{person.title}</div>
            <div className = "person-block-info">
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
