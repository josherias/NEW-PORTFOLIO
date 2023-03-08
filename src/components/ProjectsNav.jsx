import React from "react";
import ProjectLink from "./ProjectLink";

const ProjectsNav = () => {
  const links = [
    {
      title: "Personal",
      to: "/projects",
    },
    {
      title: "Clients",
      to: "/projects/clients",
    },
  ];

  return (
    <div className="flex items-center gap-4 justify-center mb-8">
      {links.map((link, index) => (
        <ProjectLink key={index} title={link.title} to={link.to} />
      ))}
    </div>
  );
};

export default ProjectsNav;
