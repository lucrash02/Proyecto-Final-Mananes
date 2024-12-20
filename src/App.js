// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Products from "./Products"; // Importa el nuevo componente de productos
import "./firebase/firebaseConfig"; // Configuración de Firebase
import "./App.css"; // Estilos generales

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
              <Route path="/category/:id" element={<Category />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

