// src/Products.js
import React, { useState, useEffect } from "react";
import getProducts from "./services/getProducts"; // Asegúrate de que la ruta sea correcta
import { useContext } from "react";
import { CartContext } from "./context/CartContext"; // Importa el contexto del carrito

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // Accede a la función addToCart del contexto

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} ha sido agregado al carrito`);
  };

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px",
              maxWidth: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
