import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Main from "../../Layout/Main";
import "./Contact.css";
import contacts from "../../data/contacts";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      contact: "",
      message: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    // e.preventDefault()
  }

  render() {
    window.scrollTo(0, 0);

    return (
      <Main className="contactContainer">
        <p className="contactTitle">CONTACT</p>

        <form noValidate onSubmit={this.onSubmit}>
          <p className="contactHeader">Coffee with me</p>
          <p className="contact_body">
            I am always excited to work on some awesome projects..,
            <br /> Message me and lets discuss.....
          </p>
          <div className="form-group">
            <label htmlFor="name">Name.</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter your name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email or Phone No.</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              placeholder="Enter your Email or Phone no"
              value={this.state.contact}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Write a message.</label>
            <textarea
              type="text"
              className="form-control message_input"
              name="message"
              placeholder="Enter message"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="contact_button">
            Send
          </button>
        </form>
        <h3 style={{ color: "red" }}>
          Message service is disabled right now...You can send a mail to me
        </h3>
        <br />

        <p className="contact_body">
          Or, you can directly mail me at:{" "}
          <a
            href="mailto:arijitchowdhury8926@gmail.com"
            className="mail-me_link"
          >
            ARIIJTCHOWDHURY8926@GMAIL.COM
          </a>
        </p>
        <div className="icons">
          {contacts.map((contact, idx) => (
            <a href={contact.link} key={idx}>
              <FontAwesomeIcon icon={contact.icon} className="icon" />
            </a>
          ))}
        </div>
      </Main>
    );
  }
}

export default Contact;
