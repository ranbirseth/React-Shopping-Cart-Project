import React from 'react';

export default function Payment({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      <ul className="mb-6 border-t border-b py-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.quantity} x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold mb-6 text-right">Total: ${total.toFixed(2)}</div>
      <button
        onClick={handlePayment}
        className="w-full bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
}

