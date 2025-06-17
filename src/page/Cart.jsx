import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Nav from '../HomePage/Nav';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice';
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
    return total + priceNumber * item.quantity;
  }, 0);

  return (
    <>
    <Nav/>
    <div className="flex flex-col ">
      
      <div className="p-6 mt-10 max-w-4xl mx-auto flex-grow">
        <h2 className="text-2xl font-bold my-4">Your Cart</h2>
        <h1 className="mb-6">Total Items: {items.reduce((sum, item) => sum + item.quantity, 0)}</h1>

        {items.length === 0 ? (
          <p className="text-gray-600">No products in your Cart yet.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex items-center   gap-10 border-b w-[900px] py-4 relative pb-10">
              <img src={item.image} alt={item.name} className="w-34 h-34 object-contain" />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">Size: {item.size}</p>
                <p className="font-semibold">Price: {item.price}</p>
                 

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => dispatch(decreaseQuantity(index))}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(index))}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
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

    </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
