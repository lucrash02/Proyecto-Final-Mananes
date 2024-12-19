// src/components/CartWidget.js
import React from 'react';

function CartWidget() {
  return (
    <div>
      <img src="cart-icon.png" alt="Carrito" />
      <span>0</span> {/* Este número se actualizará más adelante con el número de productos en el carrito */}
    </div>
  );
}

export default CartWidget;
