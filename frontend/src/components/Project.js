import React from "react";
//ASSETS
import images from "../assets/images/projectImages/projectImages.js";
import teams from "../assets/teams.json";
//COMPONENTS
import ProjectModal from "../components/ProjectModal.js";
import SubteamBubbles from "../components/SubteamBubbles.js";

/* Project Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 * data = project object to render data of
 * currentProject = if this project is a currentProject project
 */
export default class Project2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showOverlay: false,
      currentProject: this.props.current,
      data: this.props.data,
      map: {
        INDAGO: "#91F5AD",
        "Integrative Design": "#F896D8",
        Software: "#A77DFF",
        Electrical: "#F6E4F6",
      },
    };
  }

  /* closes modal */
  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  /* opens modal */
  handleModalShow = () => {
    this.setState({ showModal: true });
  };

  /* closes overlay */
  handleOverlayClose = () => {
    this.setState({ showOverlay: false });
  };

  /* opens overlay */
  handleOverlayShow = () => {
    this.setState({ showOverlay: true });
  };

  /* renders project component */
  render() {
    let data = this.state.data;
    let bar = <div></div>;
    let containerClass = "project-container";
    let photoDescription = "photo-description-container";
    let photo = "project-photo";
    if (this.props.mobile) {
      photo = "project-photo-m";
      containerClass = "project-container-m";
    }
    if (this.state.currentProject) {
      containerClass = containerClass + " currentProject-project";
    } else {
      //add stats and read more bar if past project
      containerClass = containerClass + " past-project";
      bar = (
        <div>
          <ProjectModal data={this.state.data} map={this.state.map} />
        </div>
      );
    }
    let image = images.project;
    if (images[data.id]) {
      image = images[data.id];
    }
    return (
      <div className={containerClass}>
        <div
          onMouseEnter={() => {
            this.handleOverlayShow();
          }}
          onMouseLeave={() => {
            this.handleOverlayClose();
          }}
          className={photoDescription}
        >
          <img className={photo} src={image} alt="" />
          {this.state.showOverlay && (
            <div className="project-description">{data.info}</div>
          )}
          <div className="project-title">{data.title}</div>
        </div>
        <div className="project-text">
          <SubteamBubbles data={data.subteams} />
          {bar}
        </div>
      </div>
    );
  }
}
