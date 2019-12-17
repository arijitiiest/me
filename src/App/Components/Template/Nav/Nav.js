import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import routes from "../../../data/routes";
import Hamburger from "./Hamburger";

const Nav = () => {
  const logo = routes
    .filter(data => data.index)
    .map((data, idx) => (
      <Link className="header_logo-link" to={data.path} key={idx}>
        {data.label}
      </Link>
    ));

  const links = routes
    .filter(data => !data.index)
    .map((data, idx) => (
      <Link
        className="header_navigation-items-link"
        to={data.path}
        key={idx}
      >
        {data.label}
      </Link>
    ));

  return (
    <header className="header">
      <nav className="header_navigation">
        <div className="header_logo"> {logo} </div>
        <div className="header_navigation-items">
          <ul>{links}</ul>
        </div>
      </nav>
      <div className="header_toggle-button">
        <Hamburger />
      </div>
    </header>
  );
};

export default Nav;
