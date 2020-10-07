import React from "react";
import profilePics from "../assets/images/profilePics/profilePics.js";
import members from "../assets/members.json";
import teamsData from "../assets/teams.json";
/* Person Block Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 * data = person object to populate personblock
 */
export default class PersonBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  /* renders person block */
  render() {
    let person = this.props.data;

    let personPhoto = "logo-person-photo";
    let orientation = "0 -30px";
    if (person.orientation) {
      orientation = person.orientation;
    }
    let imageTitle = person.name.toLowerCase().replace(/\s/g, "");
    let picture = profilePics[imageTitle];
    if (!picture) {
      picture = profilePics.noPhoto;
      orientation = "0 -10px";
    }
    let personBlockFront = "person-block-front";
    let personBlockBack = "person-block-back";
    let info = "person-block-info";
    if (this.props.mobile) {
      personBlockFront = "person-block-front-m";
      personPhoto = personPhoto + "-m";
      personBlockBack = "person-block-back-m";
      info = "person-block-info-m";
    }
    let name = person.name;
    if (person.name === "Michael Zhang1") {
      name = "Michael Zhang";
    }

    if (!this.state.flipped) {
      //return back if flipped
      let title = "";
      let teams = person.team;
      for (let i = 0; i < teams.length; i++) {
        title += teamsData[teams[i]].name + " & ";
      }
      title = title.substring(0, title.length - 3);
      if (person.isLead) {
        title += " Lead";
      } else {
        title += " Member";
      }
      return (
        <div className={personBlockFront}>
          <img
            className={personPhoto}
            style={{ "object-position": orientation }}
            src={picture}
            alt="person"
          />
          <div className="person-fronttext">
            <div className="person-block-boldtext center">{name}</div>
            <div className="person-block-regtext center">{title}</div>
          </div>
        </div>
      );
    } else {
      //return front if not flipped
      return (
        <div className={personBlockBack}>
          <div className="person-block-boldtext center">{name}</div>
          <div className="person-block-regtext center">{person.title}</div>
          <div className={info}>
            <div className="person-block-boldtext">Year</div>
            <div className="person-block-regtext">{person.year}</div>
            <div className="person-block-boldtext">Major</div>
            <div className="person-block-regtext">{person.major}</div>
            <div className="person-block-boldtext">Team Projects</div>
            <div className="person-block-regtext">{person.projects}</div>
          </div>
        </div>
      );
    }
  }
}
