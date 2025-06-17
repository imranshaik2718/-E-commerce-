import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../HomePage/Nav';
import { removeFromCart } from '../redux/cartSlice';
import { FaTrash } from 'react-icons/fa';
import Footer from '../Components/Footer';

const CheckoutPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(removeFromCart(index));
  };

  const totalPrice = items.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^\d.]/g, ''));
    return total + priceNumber;
  }, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="p-6 mt-10 max-w-4xl mx-auto flex-grow">
        <h2 className="text-2xl font-bold my-4">Your Cart</h2>
        <h1 className="mb-6">Total Items: {items.length}</h1>

        {items.length === 0 ? (
          <p className="text-gray-600">No products in your Cart yet.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex items-center gap-6 border-b w-[900px] py-4 relative pb-10">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-contain" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="font-semibold">{item.price}</p>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-600 hover:text-red-800 absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                title="Remove"
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <div className="bg-[#f8f8f8] border-b p-6">
          <div className="max-w-4xl mx-auto flex justify-between items-center py-10">
            <div>
              <p className="text-xl font-semibold">Total: ₹{totalPrice.toLocaleString()}</p>
              <p className="text-sm text-gray-500">Includes all items in your cart</p>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-4xl hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CheckoutPage;
