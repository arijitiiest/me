import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMugHot } from "@fortawesome/free-solid-svg-icons";

import contacts from "../../../data/contacts";
import "./Sidebar.css";
import { me } from "../../../assets/index";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="section">
        <Link to="/">
          <img src={me} alt="me" className="img_me" />
        </Link>
        <Link to="/" className="my-name-link">
          <h2 className="my-name">Arijit Chowdhury</h2>
        </Link>
        <p className="mail-me">
          <a
            href="mailto:arijitchowdhury8926@gmail.com"
            className="mail-me_link"
          >
            ARIIJTCHOWDHURY8926@GMAIL.COM
          </a>
        </p>
      </div>

      <div className="section">
        <h6 className="sidebar-about">About</h6>
        <p className="sidebar-about-desc">
          Hi, I'm Arijit Chowdhury, a Information Technology undergraduate
          student of{" "}
          <a className="iiest-link" href="https://www.iiests.ac.in/">
            {" "}
            Indian Institute of Engineering Science and Technology, Shibpur
          </a>
          . I love building things and exploring new technologies.
        </p>
      </div>

      <div className="section footSec">
        <div className="icons">
          {contacts.map((contact, idx) => (
            <a href={contact.link} key={idx}>
              <FontAwesomeIcon icon={contact.icon} className="icon" size="lg" />
            </a>
          ))}
        </div>
        <div className="motivation">
          made with <FontAwesomeIcon icon={faHeart} /> and{" "}
          <FontAwesomeIcon icon={faMugHot} />
        </div>
        <div className="copyright">No &copy; copyright issues</div>
      </div>
    </div>
  );
};

export default Sidebar;
