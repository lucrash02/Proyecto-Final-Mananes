// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      if (!prevCart.some((product) => product.id === item.id)) {
        const newCart = [...prevCart, item];
        console.log("Nuevo carrito después de agregar:", newCart); // Para verificar el carrito actualizado
        return newCart;
      }
      return prevCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      console.log("Carrito después de eliminar:", updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    console.log("Carrito limpiado");
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};




