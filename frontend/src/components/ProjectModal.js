import React from "react";
import images from "../assets/images/images.js"
import Project from "./Project.js"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class ProjectModal extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
	  this.handleClose = this.handleClose.bind(this);

      this.state = {
        show: false,
        data: this.props.data
          };
        }

        handleClose() {
    		this.setState({ show: false });
    	}

    	handleShow() {
    		this.setState({ show: true });
    	}

      render() {
          let data = this.state.data;
        return (
            <div>
            <Button onClick={this.handleShow}/>
                <Project data = {this.props.data} current = {false}/>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Test</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.handleClose}>Save Change</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        );
    }
    }
