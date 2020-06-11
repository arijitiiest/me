import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";

import Main from "../../Layout/Main";
import "./Contact.css";
import contacts from "../../data/contacts";

const Contact = (props) => {
  window.scrollTo(0, 0);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponce = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    Axios({
      method: "post",
      url: "https://formspree.io/xnqgnjow",
      data: new FormData(form),
    })
      .then((res) => {
        handleServerResponce(true, "Submitted... Thanks!", form);
      })
      .catch((err) => {
        handleServerResponce(false, err.response.data.error, form);
      });
  };

  return (
    <Main className="contactContainer">
      <p className="contactTitle">CONTACT</p>

      <div style={{ marginBottom: "4rem"}}>
        <form onSubmit={handleOnSubmit}>
          <p className="contactHeader">Coffee with me</p>
          <p className="contact_body">
            I am always excited to work on some awesome projects...,
            <br /> Message me and lets discuss... &#128512;
          </p>
          <div className="form-group">
            <label htmlFor="full-name">Full Name.</label>
            <input
              className="form-control"
              id="full-name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="email" 
              name="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control message_input"
              id="message"
              name="message"
              placeholder="Enter message"
            ></textarea>
          </div>
          <button
            className="contact_button"
            type="submit"
            disabled={serverState.submitting}
          >
            Submit
          </button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : "success"}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>

      <p className="contact_body">
        Or, you can directly mail me at:{" "}
        <a href="mailto:arijitchowdhury8926@gmail.com" className="mail-me_link">
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
};

export default Contact;
