// src/components/ItemCount.js
import React, { useState } from "react";

const ItemCount = ({ stock, onAddToCart }) => {
  const [count, setCount] = useState(1); // Inicializa la cantidad en 1

  // Función para manejar el incremento de la cantidad
  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  // Función para manejar la disminución de la cantidad
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Función para agregar al carrito
  const handleAddToCart = () => {
    if (count > stock) {
      alert("No hay suficiente stock disponible.");
    } else {
      onAddToCart(count); // Llama a la función pasada como prop
    }
  };

  return (
    <div>
      <div>
        <button onClick={decrease}>-</button>
        <span>{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <div>
        <button onClick={handleAddToCart}>
          {count > 0 ? "Agregar al carrito" : "Selecciona una cantidad"}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
