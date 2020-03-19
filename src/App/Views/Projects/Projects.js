import React, { Component } from "react";

import Main from "../../Layout/Main";
import ProjectCard from '../../Components/ViewData/ProjectCard/ProjectCard';
import "./Projects.css";
import projects from '../../data/projects';

class Projects extends Component {
  render() {
    window.scrollTo(0, 0);

    const rows = [...Array( Math.ceil(projects.length / 2) )];
    const projectRows = rows.map( (row, idx) => projects.slice(idx * 2, idx * 2 + 2) );

    const projContent = projectRows.map((row, idx) => (
      <div className="projectRow" key={idx}>
        {row.map( project => <div className="projectCol" key={project.title}>
                                <ProjectCard data={project} />
                             </div>)}
      </div>
    ));

    return (
      <Main className="projectContainer">
        <p className="projectsTitle">PROJECTS</p>
        <p className="projectText">On this page I list my favorite projects, both big and small.
                                    However, from time to time I like to take on slightly larger projects.
                                    The projects are really fun to look at and play with.</p>
        <p className="projectHeading">A SELECTION OF PROJECTS THAT I'M NOT TOO ASHAMED OF</p>
        <div>
          {projContent}
        </div>
      </Main>
    );
  }
}

export default Projects;
