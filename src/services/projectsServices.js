import ImageGen from "../assets/img/image-gen-mern.png";
import goExplore from "../assets/img/go-explore.png";
import BeachResort from "../assets/img/beach-resort.png";
import phoneStore from "../assets/img/phone-store.png";
import finance from "../assets/img/finance.png";
import todo from "../assets/img/todo.png";
import edPlus from "../assets/img/edplus.png";

const personalProjects = [
  {
    title: "AI IMAGE GENERATION",
    image: ImageGen,
    details:
      "This project utilises the OpenAI API to generate images for a user just by passing a description of he/she wants and shares the image with other users. Images are saved and retrieved from cloudinary ",
    technologies: ["Tailwind CSS", "React Js", "Node.js", "OpenAI"],
    github: "https://github.com/josherias/Image-Generation-MERN",
    live: "https://image-generation-mern-josh.netlify.app",
  },

  {
    title: "React Beach Resort",
    image: BeachResort,
    details:
      "This is a beach resort application that enables a user to view different rooms and their features, description, price etc of hotel beach resort. Users can also filter the diderent available rooms",
    technologies: ["CSS", "React Js"],
    github: "https://github.com/josherias/React-Beach-Resort",
    live: "https://react-beach-resort-josh.netlify.app",
  },

  {
    title: "React Phone Store",
    image: phoneStore,
    details:
      "This is is made by react Js. You can add, remove items to the cart, calculate the cart totals, view details of a phone product etc.",
    technologies: ["CSS", "React Js"],
    github: "https://github.com/josherias/react-phone-store",
    live: "https://josh-phone-store.netlify.app",
  },
  {
    title: "React Js Landing Page",
    image: finance,
    details:
      "This is a single page landing page made with React Js and Tailwind CSS. It also includes a few animations.",
    technologies: ["Tailwind CSS", "React Js"],
    github: "https://github.com/josherias/REACT_TAILWIND_FINANCE",
    live: "https://josh-tailwind-finace.netlify.app/",
  },
  {
    title: "MERN stack Todo App",
    image: todo,
    details:
      "This is a MERN stack Todo App that inlcudes filtering, pagination, sorting with all CRUD operations and Authentication.",
    technologies: ["Tailwind CSS", "React Js", "Node.js", "MongoDB"],
    github: "https://github.com/josherias/MERN_STACK_TODO_APP",
    live: "https://josh-mern-todo.netlify.app",
  },
];

const clientProjects = [
  {
    title: "GoExplore Tours",
    image: goExplore,
    details:
      "A website where users can go and view differnt tour and travel packages availabel with the GoExplore Tours and Travel Company. Includes information about different places to visit.",
    technologies: ["PHP", "CSS", "Jquery"],
    github: "https://github.com/josherias/geoexplo-safaris",
    live: "https://goexploresafaris.com/",
  },

  {
    title: "EDplus 360",
    image: edPlus,
    details:
      "This is a school management system that handles all school activities in one place. A school can be managed in a single place online.",
    technologies: ["Laravel", "Bootstrap", "Jquery"],
    github: "https://edplus360.com/",
    live: "https://edplus360.com/",
  },
];

export function getPersonalProjects() {
  return personalProjects;
}

export function getClientProjects() {
  return clientProjects;
}
