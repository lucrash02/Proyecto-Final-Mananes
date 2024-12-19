import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>El carrito está vacío.</p>;
  }

  console.log("Contenido del carrito:", cart);
  
  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.quantity || 0} x ${product.price || 0}
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${getTotal()}</p>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default Cart;



