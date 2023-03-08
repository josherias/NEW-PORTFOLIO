import React, { useEffect, useState } from "react";
import ProjectsWrapper from "../components/ProjectsWrapper";
import { getClientProjects } from "../services/projectsServices";
import LoadingComponent from "../components/LoadingComponent";

const ClientsProject = () => {
  const [clientProjects, setClientProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    try {
      const clientData = getClientProjects();
      setClientProjects(clientData);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <section className="w-[100%] min-h-[90vh">
      <h1 className="text-2xl font-black text-gray-800 my-4">Client`s.</h1>
      {loading ? (
        <div className="flex justify-center items-center my-20">
          <LoadingComponent />
        </div>
      ) : (
        <ProjectsWrapper projects={clientProjects} />
      )}
    </section>
  );
};

export default ClientsProject;
