import React, { useState } from "react";
import ProductViewCard from "./productViewCard"; 
import Header from "./header";
function ParentComponent() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
      {/* Product View */}
      <ProductViewCard addToCart={addToCart} />

      {/* Cart Drawer */}
      <z cart={cart} />
    </div>
  );
}

export default ParentComponent;
