// src/components/ItemDetail.js
import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
    </div>
  );
};

export default ItemDetail;

