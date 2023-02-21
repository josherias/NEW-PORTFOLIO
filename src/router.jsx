import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Projects from "./views/Projects";
import NotFound from "./views/NotFound";
import DefaultContainer from "./components/DefaultContainer";

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
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
