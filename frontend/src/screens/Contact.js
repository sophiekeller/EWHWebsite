import React from "react";
import images from "../assets/images/images.js"

//COMPONENTS
import Header from "../components/Header";
const gapi = require('gapi-client');
const fetch = require("node-fetch")
const emailjs = require('emailjs-com')
// const {google} = require('googleapis');

/* Contact Page Component
* PROPS:
* mobile = true if the screen rendering the site has width less than 650 px, bool
*/
export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: "",
        error: ""
      };
    }
    clear(){
        this.setState({name: "", email: "", message: ""})
    }
    /* send an email to ewhcornell@gmail.com on submit */
    async sendData(){
        var template_params = {
            "from_name": this.state.name,
            "from_email": this.state.email,
            "message": this.state.message
        }
        var service_id = "gmail";
        var template_id = "site_form";
        var user_id = "user_ymCOugA9haFx28g9LxZQe"
        let result = await emailjs.send(service_id, template_id, template_params, user_id);
        if (result.status == 200){
            this.clear()
            this.setState({error: "your message was sent"})
        }else{
            this.setState({error: "there was a problem sending your email. please email ewhcornell@gmail.com directly with your message."})
        }
        }


    /* renders contact page */
    render() {
        return (
            <div className="home-container">
                <Header mobile = {this.props.mobile}
                    photo={images.header2}
                    state={this.state}
                    title = "Contact Us"/>
                <div className="contacts-container">
                    <div className = "contact-title">Support Our Mission</div>
                    <div className = "contact-paragraph">{mission_statement}</div>
                    <div className = "contact-buttons-container">
                        <div className = "contact-button">Sponsorship Packet</div>
                        <div className = "contact-button">Make a Donation</div>
                    </div>
                    <div className = "contact-title">Send us a Message</div>
                    <div className = "contact-paragraph">Email <b>ewhcornell@gmail.com</b> or leave a message below!</div>
                    <input
                        className = "contact-input"
                        value = {this.state.name}
                        onChange = {(e)=> {this.setState({name: e.target.value})}}
                        placeholder="Name"/>
                    <input
                        className = "contact-input"
                        value = {this.state.email}
                        onChange = {(e)=> {this.setState({email: e.target.value})}}
                        placeholder="Your Email Address"/>
                    <textarea
                        className = "contact-textarea"
                        value = {this.state.message}
                        onChange = {(e)=> {this.setState({message: e.target.value})}}
                        placeholder = "Leave a Message"/>
                    <div onClick = {() => (this.sendData())}>Submit</div>
                    <div className = "contact-form-error">{this.state.error}</div>
                </div>
            </div>
        );
  }
}
var mission_statement = "Our team depends on the generous support of our sponsors. Learn about what we do and how you can help."
