// src/containers/ItemDetailContainer.js
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import ItemCount from "../components/ItemCount"; 
import { CartContext } from "../context/CartContext";
import getProducts from "../services/getProducts"; // Importación correcta

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtiene el ID desde la URL
  const { addToCart } = useContext(CartContext); // Función para agregar productos al carrito
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts(); // Obtiene todos los productos de Firestore
        const foundProduct = products.find((product) => product.id === id); // Busca el producto por ID
        if (foundProduct) {
          setProduct(foundProduct); // Si lo encuentra, lo establece en el estado
        } else {
          console.error("Producto no encontrado");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar el producto:", error);
        setLoading(false); // Aunque haya error, cambiamos a estado no cargando
      }
    };

    fetchProduct();
  }, [id]); // El efecto se ejecuta cada vez que cambia el id

  const handleAddToCart = (count) => {
    if (count > product.stock) {
      alert("No hay suficiente stock disponible.");
    } else {
      addToCart({ ...product, quantity: count });
      alert(`${product.name} ha sido agregado al carrito`);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {loading ? (
        <p>Cargando detalles del producto...</p>
      ) : (
        product ? (
          <>
            <ItemDetail product={product} />
            <ItemCount
              stock={product.stock}
              onAddToCart={handleAddToCart}
            />
          </>
        ) : (
          <p>Producto no encontrado</p>
        )
      )}
    </div>
  );
};

export default ItemDetailContainer;

