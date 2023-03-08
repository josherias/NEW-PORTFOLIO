import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import NotFound from "./views/NotFound";
import DefaultContainer from "./components/DefaultContainer";
import PersonalProjects from "./views/PersonalProjects";
import ClientsProject from "./views/ClientsProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            path: "/projects",
            element: <PersonalProjects />,
          },
          {
            path: "/projects/clients",
            element: <ClientsProject />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
