import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
const Projects = lazy(() => import("./views/Projects"));
const NotFound = lazy(() => import("./views/NotFound"));
const DefaultContainer = lazy(() => import("./components/DefaultContainer"));

import PersonalProjects from "./views/PersonalProjects";
import ClientsProject from "./views/ClientsProject";
import LoadingComponent from "./components/LoadingComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingComponent />}>
        <DefaultContainer />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingComponent />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/projects",
        element: (
          <Suspense fallback={"loading..."}>
            <Projects />
          </Suspense>
        ),
        children: [
          {
            path: "/projects",
            element: <PersonalProjects />,
          },
          {
            path: "/projects/clients",
            element: (
              <Suspense fallback={"loading..."}>
                <ClientsProject />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={"loading..."}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default router;
