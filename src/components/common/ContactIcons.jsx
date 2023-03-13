import React from "react";

const ContactIcons = ({ icon, info }) => {
  return (
    <div
      className={`w-[100%] flex gap-2 items-center justify-center bg-green-100 py-3 px-3 my-2 rounded-md md:w-[200px]`}
    >
      <img src={icon} className="w-7" alt="icon" />
      <span className="text-sm text-gray-700">{info}</span>
    </div>
  );
};

export default ContactIcons;
