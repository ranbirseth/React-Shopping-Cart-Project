import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Payment from './components/Payment';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex justify-between items-center shadow-md relative">
        <Link to="/" className="font-bold text-lg text-blue-600 hover:text-blue-800">Home</Link>
        <div className="relative">
          <Link 
            to="/cart" 
            className="text-lg text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">
              {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
            Cart
          </Link>
          {cart.length > 0 && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
              <ul className="divide-y divide-gray-200">
                {cart.slice(0, 3).map((item) => (
                  <li key={item.id} className="p-2 text-sm flex justify-between items-center">
                    <span>{item.name} x {item.quantity}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 text-xs"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {cart.length > 3 && (
                <div className="p-2 text-center text-sm text-blue-600">
                  <Link to="/cart">View all items</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/payment" element={<Payment cart={cart} />} />
      </Routes>
    </Router>
  );
}
