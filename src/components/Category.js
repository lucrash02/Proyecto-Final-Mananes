// src/components/Category.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams(); // Obtiene el id desde la URL
  return <h1>Categoria {id}</h1>;
};

export default Category;
