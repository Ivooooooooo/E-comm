import React from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div className="cart-items-container">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-description">{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveOne(item)}>-</button>
                  <button onClick={() => handleDeleteItem(item)}>Eliminar</button>
                </div>
              </div>
              <div className="cart-item-total">
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total a pagar: ${calculateTotal()}</h3>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
