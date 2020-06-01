import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./ProjectCard.css";

const ProjectCard = (props) => {
  const {
    image,
    title,
    date,
    subtitle,
    technologies,
    gitRepo,
    link,
  } = props.data;

  return (
    <div className="projectCard">
      <div className="projectTitle">{title}</div>
      <div className="projectDate">{date}</div>
      <img src={image} className="projectImage" alt={title}></img>

      <div className="projectDesc">
        <p className="projectSub">{subtitle}</p>
        <p className="projectTech">
          <strong>Technologies: </strong>
          {technologies}
        </p>
        <p className="projectDetails">
          <a href={gitRepo} style={{ textDecoration: "none", color: "black" }}>
            <span>GITHUB : </span>
            <FontAwesomeIcon icon={faGithub} size="lg" className="icon" />
          </a>
          {link ? (
            <a href={link} style={{ textDecoration: "none", color: "black" }}>
              <span> Link : </span>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                size="lg"
                className="icon"
              />
            </a>
          ) : (
            <span></span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
