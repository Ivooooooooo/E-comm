<<<<<<< HEAD
import React from "react";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  getAllProducts,
  deleteProductById,
  createProduct,
} from "../../services/productsServices";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = (category) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    getAllProducts()
      .then((res) => {
        console.log("Fetched products:", res.data.products);
        if (category) {
          const filteredProducts = res.data.products.filter(product => product.category === category);
          console.log("Filtered products:", filteredProducts);
          setProducts(filteredProducts);
        } else {
          setProducts(res.data.products);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Row>
        {products.length === 0 && <p>No hay productos para mostrar</p>}
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <Card.Img variant="top" src={product.thumbnail} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/item/${product.id}`}>Ir al detalle</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainerComponent;
=======
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
>>>>>>> e21aa20057951619c0f6fd04af5e723362d784dc
