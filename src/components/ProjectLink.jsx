import React from "react";
import { NavLink } from "react-router-dom";

const ProjectLink = ({ title, to }) => {
  const activeLink = "px-4 py-2 bg-slate-900 text-white rounded cursor-pointer";
  const normalLink = "px-4 py-2 rounded cursor-pointer border";

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      {title}
    </NavLink>
  );
};

export default ProjectLink;
