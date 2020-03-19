import React from "react";

import "./SkillCard.css";

const SkillCard = props => {
  const { title, image, desc, link } = props.data;
  return (
    <div className="skillCard">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="imageContainer">
            <img src={image} alt={title} className="skillImage" />
          </div>
          <p className="skillTopic">{title}</p>
        </div>
        <div className="flip-card-back">
          <div className="skillDesc">{desc}</div>
          <a href={link}><p className="knowMore">KNOW MORE</p></a>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
