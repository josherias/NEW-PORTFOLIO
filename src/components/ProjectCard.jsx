import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const ProjectCard = ({ project }) => {
  return (
    <div className="border mb-5 hover:shadow-md">
      <img src={project.image} alt="img" className="w-[100%] mb-3" />
      <div className="py-3 px-4">
        <div className="flex justify-between mb-4 items-center">
          <h3 className="text-md font-black text-gray-800">
            {project.title.toUpperCase()}
          </h3>

          <div className="flex gap-3 text-blue-700">
            <a
              href={project.github}
              title="github"
              className="hover:text-gray-800"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              href={project.live}
              title="live demo"
              className="hover:text-gray-800"
              target="_blank"
            >
              <LinkIcon />
            </a>
          </div>
        </div>
        <p className="flex-wrap text-gray-700 mb-5 text-sm">
          {project.details}
        </p>
        <div className="flex gap-3 my-4 justify-center flex-wrap">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="text-white text-xs bg-gray-800 rounded-sm px-2 py-1"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
