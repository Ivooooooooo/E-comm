import React, { useState } from "react";
import "./ItemListContainerComponent.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const ItemListContainerComponent = ({ products }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="itemListContainer">
      {products.map((product) => {
        const isExpanded = expanded[product.id];
        return (
          <Card key={product.id} className="product-card">
            <Card.Img variant="top" src={product.thumbnail} className="product-image" />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {isExpanded
                  ? product.description
                  : product.description.length > 100
                  ? product.description.slice(0, 100) + "..."
                  : product.description}
                {product.description.length > 100 && (
                  <span className="toggle-expand" onClick={() => toggleExpand(product.id)}>
                    {isExpanded ? " Ver menos" : " Ver más"}
                  </span>
                )}
              </Card.Text>
              <Link to={`/item/${product.id}`}>Ir a detalle</Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainerComponent;