import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-900 p-5 flex items-center justify-center bottom-0 w-[100%]">
      <div>
        <h2 className="text-white font-bold">
          Lubuulwa Josh Elias @{date.getFullYear()}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
