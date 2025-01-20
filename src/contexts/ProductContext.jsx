import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // Sample product data
    const sampleProducts = [
      { id: 1, title: 'The Art Of War', price: 10.11, image: 'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg' },
      { id: 2, title: '1984', price: 8.99, image: 'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg' },
      { id: 3, title: 'To Kill a Mockingbird', price: 12.99, image: 'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg' },
      { id: 4, title: 'The Great Gatsby', price: 14.99, image: 'https://images-na.ssl-images-amazon.com/images/I/41FBMkY3cgL._SX331_BO1,204,203,200_.jpg' },
    ];
    setProducts(sampleProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
