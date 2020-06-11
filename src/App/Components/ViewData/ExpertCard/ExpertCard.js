import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import 'aos/dist/aos.css';

import "./ExpertCard.css";

const ExpertCard = (props) => {
  const { title, desc, icon, link } = props.data;
  AOS.init({
    offset: 300,
    duration: 1200,
  });

  return (
    <div className="expertCard" data-aos="fade-up">
      <a href={link} className="expertIconContainer">
        <div className="topIcon"></div>
        <div className="middleIcon">
          <FontAwesomeIcon icon={icon} size="2x" className="expertIcon" />
        </div>
        <div className="bottomIcon"></div>
      </a>
      <div className="expertTitle">{title}</div>
      <div className="expertDesc">{desc}</div>
    </div>
  );
};

export default ExpertCard;
