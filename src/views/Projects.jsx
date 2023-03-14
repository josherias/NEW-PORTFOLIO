import React from "react";
import { Outlet } from "react-router-dom";
import ProjectsNav from "../components/ProjectsNav";

const Projects = () => {
  return (
    <div className="pt-20 my-10 mx-5 md:mx-20 lg:mx-28 ">
      <div className="flex items-center flex-col justify-center mb-8">
        <h1 className="text-2xl font-black text-gray-800 my-3">
          My Recent works
        </h1>
        <p className="flex-wrap text-center text-gray-600 mb-3">
          Here are a few past projects I have worked on. Want to see more? Email
          me.
        </p>
      </div>
      <ProjectsNav />
      <Outlet />
    </div>
  );
};

export default Projects;
