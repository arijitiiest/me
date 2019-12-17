import React from "react";
import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";

import routes from "../../../data/routes";

const Hamburger = () => {
  const links = routes.map((data, idx) => (
    <NavLink to={data.path} exact key={idx}>
      {data.label}
    </NavLink>
  ));
  return (
    <Menu right width={"280px"} disableAutoFocus>
      {links}
    </Menu>
  );
};

export default Hamburger;
