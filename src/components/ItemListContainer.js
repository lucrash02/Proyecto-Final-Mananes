// src/components/ItemListContainer.js
import React, { useEffect, useState, useContext } from "react";
import getProducts from "../services/getProducts"; // Correcta importación de getProducts
import { CartContext } from '../context/CartContext';  // Importa el contexto del carrito
import './ItemListContainer.css';  // Asegúrate de importar los estilos

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);  // Obtén la función para agregar al carrito

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromFirestore = await getProducts();
      setProducts(productsFromFirestore);
    };
    fetchProducts();
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  const handleAddToCart = (product) => {
    addToCart(product);  // Agrega el producto al carrito
    alert(`${product.name} ha sido agregado al carrito`);  // Mensaje de confirmación
  };

  return (
    <div className="item-list-container">
      <h1>Lista de Productos</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;

