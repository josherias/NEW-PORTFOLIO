import React from "react";

const TechComponent = ({ src, title }) => {
  return (
    <div className="flex flex-col  items-center">
      <div className="bg-white p-4 rounded-full flex items-center justify-center">
        <img src={src} alt="svg" className="w-8 object-contain" />
      </div>
      <span className="text-gray-600 text-sm mt-1">{title}</span>
    </div>
  );
};

export default TechComponent;
