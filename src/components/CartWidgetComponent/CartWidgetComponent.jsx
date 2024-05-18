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
    </div>
  );
};

export default CartWidgetComponent;
