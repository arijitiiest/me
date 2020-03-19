import React from "react";

import "./Research.css";
import researchs from "../../data/researchs";
import Main from "../../Layout/Main";
import ResearchCard from "../../Components/ViewData/ResearchCard/ResearchCard";

const Research = props => {
  window.scrollTo(0, 0);

  const reshContent = researchs.map((research, idx) => {
    return <ResearchCard key={idx} data={research} />;
  });

  return (
    <Main className="researchContainer">
      <p className="researchTitle">PUBLICATIONS</p>
      <p className="researchText">
        During my ongoing studies I’ve done some research on various topics.
        Below are papers that I’ve coauthored.
      </p>
      {reshContent}
    </Main>
  );
};

export default Research;
