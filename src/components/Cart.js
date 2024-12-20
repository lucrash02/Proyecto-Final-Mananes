// src/components/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <p className="cart-empty">El carrito está vacío.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <div className="cart-item-info">
              <span>{product.name}</span>
              <span>
                {product.quantity || 0} x ${product.price || 0}
              </span>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeFromCart(product.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total: ${getTotal()}</p>
        <button className="cart-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;




