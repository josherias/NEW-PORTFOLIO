import React from "react";
import Git from "../assets/git.png";
import Laravel from "../assets/laravel.png";
import Mongodb from "../assets/mongodb.png";
import Node from "../assets/node.svg";
import Php from "../assets/php.png";
import ReactJs from "../assets/react.png";
import Sql from "../assets/sql.png";
import Tailwind from "../assets/tailwind.png";
import TechComponent from "./common/TechComponent";

const techs = [
  {
    title: "Git",
    png: Git,
  },
  {
    title: "Laravel",
    png: Laravel,
  },
  {
    title: "Mongodb",
    png: Mongodb,
  },
  {
    title: "Node JS",
    png: Node,
  },
  {
    title: "PHP",
    png: Php,
  },
  {
    title: "React Js",
    png: ReactJs,
  },
  {
    title: "SQL",
    png: Sql,
  },
  {
    title: "Tailwind CSS",
    png: Tailwind,
  },
];

const Technologies = () => {
  return (
    <section className="flex flex-col items-center justify-center w-[100%] px-10 py-[80px] bg-gray-50">
      <h1 className="text-4xl font-black text-gray-800 mb-4">Technologies</h1>
      <h3 className="text-gray-700 mb-4">Check out my tech stack</h3>
      <div className="flex gap-2 flex-wrap items-center justify-center">
        {techs.map((tech, index) => (
          <TechComponent key={index} src={tech.png} title={tech.title} />
        ))}
      </div>
    </section>
  );
};

export default Technologies;
