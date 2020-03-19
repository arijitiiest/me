import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Main from "../../Layout/Main";
import HomeSlider from "../../Components/ViewData/HomeSlider/HomeSlider";
import ExpertCard from "../../Components/ViewData/ExpertCard/ExpertCard";
import { expertData } from "../../data/expertData";

class Home extends Component {
  render() {
    window.scrollTo(0, 0);

    return (
      <Main>
        <HomeSlider />
        <div className="homeAbout">
          <div className="abMe">ABOUT ME</div>
          <div className="amI">WHO AM I?</div>
          <div>
            Hi, I'm Arijit from India and I'm currently a Information Technology
            undergraduate in Indian Institute of Engineering Science and
            Technology,Shibpur. It's been quite a great experience during my 2
            years of journey in the field of Computer-Science & IT. I have
            learnt many new topics which are intriguing and at the same time
            quite difficult . Maybe this is why I am in so love with this
            subject. I love exploring new technologies and often amazed by the
            progress we as a human species have mad so far in the recent years.
            <br />
            <br />
            <br />I have started reflecting my ideas and thougths through the
            medium of words recently so spelling and grammer mistaks are very
            often.You can write me back if you spot any and don't want to live
            anymore :P
          </div>
          <br />
          <br />
          <div>
            To learn more about me goto about section{" "}
            <Link className="homeAboutLink" to="/about">
              ABOUT
            </Link>
          </div>
        </div>
        <div className="homeAbout">
          <div className="abMe">WHAT I DO?</div>
          <div className="amI">HERE ARE SOME OF MY EXPERTISE</div>
          <div className="expertRow">
            {expertData.map(data => (
              <div className="expertColumn" key={data.title}>
                <ExpertCard data={data} />
              </div>
            ))}
          </div>
          <div>
            To know more check out my{" "}
            <Link className="homeAboutLink" to="/resume">
              RESUME
            </Link>
          </div>
        </div>
      </Main>
    );
  }
}

export default Home;
