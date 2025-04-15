import React, { useState } from 'react';

const products = [
    { id: 1, name: 'T-shirt', price: 20, image: 'https://www.creativefabrica.com/wp-content/uploads/2023/08/07/Front-And-Back-View-Of-A-Black-TShirt-Graphics-76372576-1.png' },
    { id: 2, name: 'Shoes', price: 50, image: 'https://th.bing.com/th/id/OIP.XOVdjiqU2X36zbtpjaC_6AHaE8?rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Backpack', price: 35, image: 'https://th.bing.com/th/id/OIP.CnQDrXn0cckLqYC54deHuQHaIO?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Hat', price: 15, image: 'https://th.bing.com/th/id/OIP.RrHmKeYPT4fcwuIuo6orRAHaFi?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Jacket', price: 80, image: 'https://cdn.pixabay.com/photo/2017/10/06/04/32/jacket-2821961_1280.jpg' },
    { id: 6, name: 'Sunglasses', price: 25, image: 'https://th.bing.com/th/id/OIP.0g4DoZvvGbDLGcPeFSImMQHaE5?rs=1&pid=ImgDetMain' },
  ];
  

export default function Home({ addToCart }) {
  const [animateProductId, setAnimateProductId] = useState(null);

  const handleAddToCart = (product) => {
    setAnimateProductId(product.id);
    addToCart(product);
    setTimeout(() => setAnimateProductId(null), 500); 
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border p-4 rounded shadow hover:shadow-lg transition-shadow ${
              animateProductId === product.id ? 'animate-bounce' : ''
            }`}
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
