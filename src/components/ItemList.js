// src/components/ItemList.js
import React, { useState, useEffect } from "react";
import getProducts from "../services/getProducts";  // Importa la función que creamos para obtener productos

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromFirestore = await getProducts();
      setProducts(productsFromFirestore);
    };

    fetchProducts();
  }, []);  // Este efecto se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <h2>Lista de Productos</h2>
      <div className="products-list">
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          products.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemList;
