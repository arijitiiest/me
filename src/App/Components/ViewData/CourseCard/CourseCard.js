import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

import "./CourseCard.css";

const CourseCard = props => {
  const { title, provider, certificate, link } = props.data;
  return (
    <div className="courseCol">
      <div className="courseCard">
        <span>
          <a className="courseLink" href={link}>
            {title}
          </a>
        </span>
        {certificate ? (
          <span className="certificate">
            <a
              className="certificateLink"
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCertificate} />
              <span className="certificateText">Certificate</span>
            </a>
          </span>
        ) : (
          <div></div>
        )}
        <div className="courseProvider">{provider}</div>
      </div>
    </div>
  );
};

export default CourseCard;
