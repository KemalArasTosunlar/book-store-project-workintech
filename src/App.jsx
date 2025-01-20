import React from 'react';
import { Route } from 'react-router-dom';

import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <Navigation />
          <main className="content">
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/cart">
              <ShoppingCart />
            </Route>
          </main>
        </div>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
