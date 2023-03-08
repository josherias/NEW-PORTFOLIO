import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "./LinkIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "../assets/avatar.png";
import Typed from "react-typed";

const icons = [
  {
    icon: <GitHubIcon fontSize="large" />,
    to: "github",
  },

  {
    icon: <LinkedInIcon fontSize="large" />,
    to: "linkedIn",
  },
  {
    icon: <TwitterIcon fontSize="large" />,
    to: "Twitter",
  },
];

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-[90vh] w-[100%] px-10 mt-20">
      <h1 className="text-3xl font-black text-gray-800 mb-3">
        Lubuulwa Josh Elias
      </h1>
      <h1 className="text-2xl text-gray-700 mb-3">Software Developer</h1>
      <p className="flex-wrap text-center text-gray-900 mb-3">
        Software Developer with over two years of experience in building
        solutions <br /> with technology using Javascript & PHP
      </p>
      <div className="flex gap-5 my-5">
        {icons.map((i, index) => (
          <LinkIcon key={index} icon={i.icon} to={i.to} />
        ))}
      </div>
      <div>
        <img
          src={Avatar}
          alt="avatar"
          className="w-[180px] mt-5 md:w-[250px]"
        />
      </div>
    </section>
  );
};

export default Hero;
