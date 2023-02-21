import React, { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Transition } from "@headlessui/react";

import NavLinkComponent from "./common/NavLinkComponent";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleLinks, setToggleLinks] = useState(true);

  const windowSize = useRef([window.innerWidth]);
  console.log(windowSize[0]);

  const links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Projects",
      to: "/projects",
    },
    {
      title: "Resume",
      to: "/resume",
    },
  ];

  return (
    <div className="flex flex-col fixed top-0 w-[100%] bg-white pt-4 px-5 border md:flex-row md:items-center md:justify-between md:px-[5rem] md:pb-1">
      <div className="flex justify-between items-center mb-3">
        <div>
          <Link to="/" className="text-3xl font-bold text-gray-900">
            JO
          </Link>
        </div>
        <div
          className="bg-gray-900 rounded text-gray-400 p-1 cursor-pointer
      hover:bg-gray-800 hover:text-gray-100 md:hidden"
          onClick={() => setToggleLinks(!toggleLinks)}
        >
          <MenuIcon fontSize="medium" />
        </div>
      </div>
      <Transition
        show={toggleLinks}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="flex gap-4 md:hidden">
          {links.map((link, index) => (
            <NavLinkComponent key={index} title={link.title} to={link.to} />
          ))}
        </div>
      </Transition>
      <div className="hidden md:flex gap-[2rem]">
        {links.map((link, index) => (
          <NavLinkComponent key={index} title={link.title} to={link.to} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
