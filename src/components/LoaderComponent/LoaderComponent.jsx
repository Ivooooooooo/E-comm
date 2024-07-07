import React, { useEffect } from "react";
import { reuleaux } from "ldrs";
import "./LoaderComponent.css";

const LoaderComponent = () => {
  useEffect(() => {
    reuleaux.register();
  }, []);

  return (
    <div className="reuleaux-container">
      <l-reuleaux
        size="60"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.2"
        color="white"
      ></l-reuleaux>
    </div>
  );
};

export default LoaderComponent;
