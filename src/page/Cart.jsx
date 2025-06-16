import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../HomePage/Nav';

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <div>
        <Nav />
        <p className="text-center mt-10 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className="p-6 mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-6 border-b py-4">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">Size: {item.size}</p>
              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
