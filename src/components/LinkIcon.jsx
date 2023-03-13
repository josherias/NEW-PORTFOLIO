import React from "react";
import { Link } from "react-router-dom";

const LinkIcon = ({ icon, to }) => {
  return (
    <Link to={to} className="text-gray-800 hover:text-gray-900">
      {icon}
    </Link>
  );
};

export default LinkIcon;
