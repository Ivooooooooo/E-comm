import React from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ product }) => {
  const { addToCart, removeFromCart } = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };

  return (
    <div className="item-detail-container">
      <div className="product-image-container">
        {product.images ? (
          product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              className="product-image"
            />
          ))
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        )}
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
        <div className="quantity-controls">
          <button className="quantity-btn" onClick={handleRemove}>
            -
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-btn" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
