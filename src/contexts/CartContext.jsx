import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from local storage
    const savedCart = localStorage.getItem('s11g1');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, item];
      localStorage.setItem('s11g1', JSON.stringify(updatedCart)); // Save to local storage
      return updatedCart;
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => item.id !== itemId);
      localStorage.setItem('s11g1', JSON.stringify(updatedCart)); // Save to local storage
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
