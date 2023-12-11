import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const ProjectsContext = createContext({});

// eslint-disable-next-line react/prop-types
export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get("");
      setProjects(response.data);
    };
    getProducts();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
