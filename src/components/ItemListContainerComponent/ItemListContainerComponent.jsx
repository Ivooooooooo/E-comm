import React, { useState, useEffect } from 'react';
import "./ItemListContainerComponent.css";

const ItemListContainer = ({ greeting }) => {
  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showGreeting ? <p>{greeting}</p> : null}
    </div>
  );
};

export default ItemListContainer;
