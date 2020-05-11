import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HomeSlider.css";
import { homeData } from "../../../data/homeData";
import { background } from "../../../assets/index";

const delay = 4000;
const lengthData = homeData.length;

const HomeSlider = props => {
  const [dataId, setDataId] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDataId((dataId + 1) % lengthData);
    }, delay);
    return () => clearInterval(timer);
  }, [dataId]);

  return (
    <div className="Hi">
      <img src={background} className="back_img" alt="Background"></img>

      <div className="HiSlide">
        {homeData[dataId].text1}
        <br />
        {homeData[dataId].text2} <br />
        <a href={homeData[dataId].link} className="homeDataLink">
          {homeData[dataId].linkText}
          <FontAwesomeIcon
            className="homeIcon"
            icon={homeData[dataId].icon}
            size="lg"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeSlider;
