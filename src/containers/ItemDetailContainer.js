import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { CartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const simulatedProduct = {
    id: parseInt(id),
    name: `Producto ${id}`,
    description: `Este es el detalle del producto ${id}.`,
    price: 100 * parseInt(id),
  };

  const handleAddToCart = () => {
    addToCart(simulatedProduct);
    alert(`${simulatedProduct.name} ha sido agregado al carrito`);
    console.log("Producto agregado al carrito:", simulatedProduct);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Detalles del Producto</h1>
      <ItemDetail product={simulatedProduct} />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;

