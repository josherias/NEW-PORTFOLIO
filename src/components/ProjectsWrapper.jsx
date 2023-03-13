import ProjectCard from "./ProjectCard";

const ProjectsWrapper = ({ projects }) => {
  return (
    <div className="p-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectsWrapper;
