import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import "./Resume.css";
import {
  activities,
  achievements,
  skills,
  otherSkills,
  programmingLangs,
  courses,
  universityCourses,
} from "../../data/skills";
import Main from "../../Layout/Main";
import SkillCard from "../../Components/ViewData/SkillCard/SkillCard";
import CourseCard from "../../Components/ViewData/CourseCard/CourseCard";

class Resume extends Component {
  render() {
    window.scrollTo(0, 0);

    const activitiesContainer = activities.map((activity, idx) => (
      <div className="activity" key={idx}>
        <div className="activityHeader">
          <a className="activityImage" href={activity.link}>
            <img
              src={activity.image}
              alt={activity.title}
              width="100%"
              height="100%"
            />
          </a>
          <div className="activityHeaderText">
            <p className="activityHeaderTitle">{activity.title}</p>
            <p className="activityHeaderPosition">{activity.position}</p>
            <p className="activityHeaderTime">{activity.timeLine}</p>
            <div className="activityLinks">
              <a className="activityLink" href={activity.certificate}>
                Certificate
              </a>
              <a className="activityLink" href={activity.portfolio}>
                Portfolio
              </a>
            </div>
          </div>
        </div>
        {activity.desc.map((d, idx) => (
          <div className="activityDesc" key={idx}>
            <FontAwesomeIcon icon={faStar} />
            {"  "}
            <div
              className="activityDescText"
              dangerouslySetInnerHTML={{ __html: d }}
            />
          </div>
        ))}
      </div>
    ));

    const achievemantContainer = achievements.map((achievement, idx) => (
      <div key={idx}>
        <div className="achievementTitle">{achievement.title}</div>
        <div className="achievement2nd">
          <div className="achievementPosition">{achievement.position}</div>
          <div className="achievementDate">{achievement.date}</div>
        </div>
        <div className="achievementDesc">
          {achievement.desc.map((achievementDesc, idx) => (
            <div key={idx}>
              <FontAwesomeIcon icon={faArrowRight} />{" "}
              <span>{achievementDesc}</span>
            </div>
          ))}
        </div>
      </div>
    ));

    const skillsContainer = skills.map((skill, idx) => (
      <div className="skillCol" key={idx}>
        <SkillCard data={skill} />
      </div>
    ));

    const otherSkillsContainer = otherSkills.map((skill, idx) => (
      <a href={skill.link} className="otherSkill" key={idx}>
        <div>{skill.title}</div>
      </a>
    ));

    const advancedLang = programmingLangs[0].map((skill, idx) => (
      <a href={skill.link} className="otherSkill" key={idx}>
        <div>{skill.title}</div>
      </a>
    ));
    const intermediateLang = programmingLangs[1].map((skill, idx) => (
      <a href={skill.link} className="otherSkill" key={idx}>
        <div>{skill.title}</div>
      </a>
    ));
    const beginnerLang = programmingLangs[2].map((skill, idx) => (
      <a href={skill.link} className="otherSkill" key={idx}>
        <div>{skill.title}</div>
      </a>
    ));

    const coursesContainer = courses.map((course, idx) => (
      <div className="course" key={idx}>
        <CourseCard data={course} />
      </div>
    ));

    const universityCoursesContaier = universityCourses.map((course, idx) => (
      <CourseCard data={course} key={idx} />
    ));

    return (
      <div>
        <Main className="resumeContainer">
          <p className="resumesTitle">RESUME</p>
          <p className="resumeText">
            <a href="#education">EDUCATION</a>
            <a href="#experience">ACTIVITIES</a>
            <a href="#skills">SKILLS</a>
            <a href="#courses">COURSES</a>
          </p>

          <div className="education" id="education">
            <p className="resumeTopic">EDUCATION</p>
            <p className="educationTopic">B.Tech. Information Technology</p>
            <a href="https://www.iiests.ac.in/" className="institute">
              Indian Institute of Engineering Science and Technology, Shibpur
              (2021)
            </a>
            <p className="educationTopic">Class 10th and (10+2)th </p>
            <a href="https://www.mhs.in/" className="institute">
              Mira High School (H.S), PLassey (2017)
            </a>
          </div>

          <div className="experience" id="experience">
            <p className="resumeTopic">ACTIVITIES</p>
            {activitiesContainer}
          </div>

          <div className="experience">
            <div className="resumeTopic">
              <FontAwesomeIcon icon={faStarHalfAlt} size="3x" />
            </div>
            {achievemantContainer}
          </div>

          <div className="skills" id="skills">
            <p className="resumeTopic">SKILLS</p>
            <div className="skillRow">{skillsContainer}</div>
            <div>
              <p className="othersSkills">Others:</p>
              <div className="otherSkillRow">{otherSkillsContainer}</div>
            </div>
            <div>
              <p className="programmingLang">Programming Languages:</p>
              <p className="advanced">Advanced:</p>
              <div className="progLangRow">{advancedLang}</div>
              <p className="intermediate">Intermediate:</p>
              <div className="progLangRow">{intermediateLang}</div>
              <p className="beginner">Beginner:</p>
              <div className="progLangRow">{beginnerLang}</div>
            </div>
          </div>

          <div className="courses" id="courses">
            <p className="resumeTopic">COURSES</p>
            <div>{coursesContainer}</div>
          </div>
          <div className="courses" id="courses">
            <p className="resumeTopic">UNIVERSITY COURSES</p>
            <div className="universityCourse">{universityCoursesContaier}</div>
          </div>
          <div className="resumeTopic referrence">
            <Link className="referrence" to="/contact">
              REFERENCES ARE AVAILABLE UPON REQUEST
            </Link>
          </div>
        </Main>
      </div>
    );
  }
}

export default Resume;
