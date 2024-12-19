import React, { useEffect, useState } from "react";
import getProducts from "../services/getProducts";  // Ruta correcta a getProducts.js

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromFirestore = await getProducts();
      setProducts(productsFromFirestore);
    };
    fetchProducts();
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div>
      <h1>Lista de Productos</h1>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;
