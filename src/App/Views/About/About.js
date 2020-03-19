import React, { Component } from "react";

import "./About.css";
import Main from "../../Layout/Main";

class About extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <Main className="aboutContainer">
        <p className="aboutTitle">ABOUT ME</p>
        <p className="content_header">INTRO</p>
        <p className="content_body">
          Hi!,I'm ARIJIT CHOWDHURY. I am currently pursuing my Bachelors in
          Information Technology from{" "}
          <a
            className="iiest-link content_body"
            href="https://www.iiests.ac.in/"
          >
            INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLOGY
          </a>
          . I born and brought up in{" "}
          <a
            className="iiest-link content_body"
            href="https://en.wikipedia.org/wiki/Battle_of_Plassey"
          >
            Plassey
          </a>
          (
          <a
            className="iiest-link content_body"
            href="https://en.wikipedia.org/wiki/West_Bengal"
          >
            West Bengal
          </a>
          ).
          <br />
          <br />
          I'm a Machine Learning enthusiast & practitioner. A Full Stack
          Developer in MERN Stack and loves to learn and try new tools &
          technologies.
          <br />
          <br />
          something coming soon...
        </p>
      </Main>
    );
  }
}

export default About;
