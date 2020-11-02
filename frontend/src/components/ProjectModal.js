import React from "react";
//COMPONENTS
import Modal from "react-bootstrap/Modal";
import PersonBlock from "./PersonBlock.js";
import SubteamBubbles from "./SubteamBubbles.js";
import headerPhotos from "../assets/images/headerImages/headerImages.js";
import collaborators from "../assets/images/institutions/institutions.js";
import members from "../assets/members.json";
/* Project Modal Component for Project Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class ProjectModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    let membersList = members.members;
    let projectMembers = [];
    for (let i = 0; i < membersList.length; i++) {
      if (membersList[i].projects.includes(props.data.id)) {
        projectMembers.push(membersList[i]);
      }
    }
    this.state = {
      showModal: false,
      data: this.props.data,
      projectMembers: projectMembers,
    };
  }

  /* closes modal */
  handleClose = () => {
    this.setState({ showModal: false });
  };

  /* opens modal */
  handleShow = () => {
    this.setState({ showModal: true });
  };

  /* renders modal component */
  render() {
    let data = this.props.data;
    console.log(data);
    console.log(!data.collaborators.length);
    return (
      <div className="project-modal-container">
        <div
          className="project-bar"
          variant="primary"
          onClick={this.handleShow}
        >
          Read More
        </div>
        <Modal size="lg" show={this.state.showModal} onHide={this.handleClose}>
          <div closeButton />
          <img
            className="project-modal-pic"
            src={headerPhotos.projectHeader}
            alt=""
          />
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="project-modal-title-container">
                <div className="projects-title">{data.title}</div>
                <div className="modal-project-teams-container">
                  <SubteamBubbles data={data.subteams} />
                </div>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="project-text">
              {data.info_long.split("\n").map((text) => {
                return <div className="project-modal-description">{text}</div>;
              })}
            </div>
            <div className="modal-members">
              <div className="section-title">Team Members</div>
              <div className="modal-members-blocks">
                {this.state.projectMembers.map((person, index) => {
                  return (
                    <PersonBlock mobile={this.props.mobile} data={person} />
                  );
                })}
              </div>
            </div>
            {data.collaborators.length > 0 && (
              <div>
                <div className="section-title">Collaborators</div>
                {data.collaborators.map((collaborator, index) => {
                  return (
                    <img
                      className="collaborator-image"
                      src={collaborators[collaborator]}
                      alt=""
                    />
                  );
                })}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div
              className="project-modal-close-bar"
              variant="primary"
              onClick={this.handleClose}
            >
              Close
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
