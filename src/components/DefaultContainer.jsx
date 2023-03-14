import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Footer from "./Footer";
import Navbar from "./Navbar";

const DefaultContainer = () => {
  const { notification } = useStateContext();

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      {notification && (
        <div className="fixed top-40 right-0 bg-green-700 text-white px-4 py-3">
          {notification}
        </div>
      )}
    </div>
  );
};

export default DefaultContainer;
