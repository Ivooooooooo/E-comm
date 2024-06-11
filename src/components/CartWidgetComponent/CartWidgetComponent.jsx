<<<<<<< HEAD
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidgetComponent = () => {
  const customStyles = {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
      <span style={customStyles}>0</span>
=======
import React, { useState, useEffect } from "react";
import "./CartWidgetComponent.css";

const CartWidgetComponent = () => {
  const [itemCount, setItemCount] = useState(1);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (itemCount === 10) {
        setDirection(-1);
      } else if (itemCount === 1) {
        setDirection(1);
      }
      setItemCount((prevCount) => prevCount + direction);
    }, 500);

    return () => clearInterval(interval);
  }, [itemCount, direction]);

  return (
    <div className="cartWidget">
      <span>🛒= {itemCount}</span>
>>>>>>> e21aa20057951619c0f6fd04af5e723362d784dc
    </div>
  );
};

export default CartWidgetComponent;
