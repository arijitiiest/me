import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


import './ProjectCard.css';

const ProjectCard = props => {
    const { image, title, date, subtitle, technologies, gitRepo, link } = props.data;

    return (
        <div className="projectCard">
            <div className="projectTitle">{title}</div>
            <div className="projectDate">{date}</div>
            <a href={link}>
                <img src={image} className="projectImage" alt={title}></img>
            </a>
            <div className="projectDesc">
                <p className="projectSub">{subtitle}</p>
                <p className="projectTech"><strong>Technologies: </strong>{technologies}</p>
                <p className="projectDetails">DETAILS : <a href={gitRepo}><FontAwesomeIcon icon={faGithub} size="2x" className="icon"/></a></p>
            </div> 
        </div>
    );
}

export default ProjectCard;