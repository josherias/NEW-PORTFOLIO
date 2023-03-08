import React, { useEffect, useState } from "react";
import ProjectsWrapper from "../components/ProjectsWrapper";

import { getPersonalProjects } from "../services/projectsServices";
import LoadingComponent from "../components/LoadingComponent";

const PersonalProjects = () => {
  const [personalProjects, setPersonalProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    setLoading(true);
    try {
      const data = getPersonalProjects();
      setPersonalProjects(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <section className="w-[100%] min-h-[90vh]">
      <h1 className="text-2xl font-black text-gray-800 my-4">Personal.</h1>
      {loading ? (
        <div className="flex justify-center items-center my-20">
          <LoadingComponent />
        </div>
      ) : (
        <ProjectsWrapper projects={personalProjects} />
      )}
    </section>
  );
};

export default PersonalProjects;
