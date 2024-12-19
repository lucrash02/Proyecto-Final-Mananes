// src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  console.log("Contenido del carrito:", cart); // Verifica si el carrito tiene elementos

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;


