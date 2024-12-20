// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Inicio</Link>
      <Link to="/category/1" className="navbar-link">Categoría 1</Link>
      <Link to="/cart" className="navbar-link">Carrito</Link>
    </nav>
  );
};

export default NavBar;


