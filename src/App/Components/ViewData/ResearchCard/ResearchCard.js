import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import './ResearchCard.css';

const ResearchCard = props => {
    const { title, date, image, desc, gitRepo, published_in, DOI, link, ieee_added } = props.data;
    return (
        <div className="researchCard">
            <div className="researchTopic">{title}</div>
            <div className="researchDate">{date}</div>
            <a href={link}>
                <img src={image} alt={title} className="researchImage"/>
            </a>
            <div className="researchDesc">
                <p>{desc} </p>
                <p><strong>Published in: </strong>{published_in} </p>
                <p><strong>DOI: </strong><a href={link} className="iiest-link">{DOI}</a></p>
                <p><strong>Date Added to IEEE Xplore: </strong>{ieee_added}</p>
                <p className="icon" style={{paddingLeft: "20%"}}><a href={gitRepo}><FontAwesomeIcon icon={faGithub} size="2x" className="icon"/></a></p>
            </div>
            
        </div>
    );
}

export default ResearchCard;