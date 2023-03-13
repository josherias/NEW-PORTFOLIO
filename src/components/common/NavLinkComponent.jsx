import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ title, to }) => {
  return (
    <NavLink className="text-gray-500 pb-2 hover:text-gray-900 text-sm" to={to}>
      {title}
    </NavLink>
  );
};

export default NavLinkComponent;
