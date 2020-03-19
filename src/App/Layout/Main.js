import React from "react";

import Nav from "../Components/Template/Nav/Nav";
import Sidebar from "../Components/Template/Sidebar/Sidebar";
import "./Main.css";

const Main = props => (
  <div className="main">
    <Nav />
    <div className="row">
      <div className="sidebar_content">
        <Sidebar />
      </div>
      <div className="content">
          <div className={"main_content " + props.className}>
            {props.children}
        </div>
      </div>
      
    </div>
  </div>
);

export default Main;