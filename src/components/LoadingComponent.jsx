import React from "react";
import Loading from "../assets/img/loading.gif";

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={Loading} alt="loading" />
    </div>
  );
};

export default LoadingComponent;
