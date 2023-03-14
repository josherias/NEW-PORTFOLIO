import React from "react";
import { Link } from "react-router-dom";

const LinkIcon = ({ icon, to }) => {
  return (
    <a href={to} target="_blank" className="text-gray-800 hover:text-gray-900">
      {icon}
    </a>
  );
};

export default LinkIcon;
