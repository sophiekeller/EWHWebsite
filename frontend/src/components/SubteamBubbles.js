import React from "react";

import teams from "../assets/pageData/teams.json";
/* Image Buttons in About Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class SubteamBubbles extends React.Component {
  /* renders sub buttons */
  render() {
    return (
      <div className="project-teams">
        {this.props.year && <div
          className="project-subteam-bubble"
          style={{ background: "#F5AC78" }}
        >
          {this.props.year}
        </div>}
        {this.props.data.map((teamId, index) => {
          if (teamId != null) {
            let team = teams[teamId];
            let color = team.color;
            if (!color) {
              color = "#EAF9D9";
            }
            return (
              <div
                className="project-subteam-bubble"
                style={{ background: color }}
              >
                {team.name}
              </div>
            );
          } else {
            return null;
          }
        })}

      </div>
    );
  }
}
