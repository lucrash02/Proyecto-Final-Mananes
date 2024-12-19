// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (product) => product.id === productToAdd.id
      );
  
      if (existingProduct) {
        return prevCart.map((product) =>
          product.id === productToAdd.id
            ? { ...product, quantity: product.quantity + 1 } // Incrementa la cantidad
            : product
        );
      } else {
        return [...prevCart, { ...productToAdd, quantity: 1 }]; // Establece quantity en 1
      }
    });
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal, // Asegúrate de incluir getTotal aquí
      }}
    >
      {children}
    </CartContext.Provider>
  );
};








