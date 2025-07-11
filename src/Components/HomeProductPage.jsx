import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import homeProducts from '../Data/homeProducts';
import Nav from '../HomePage/Nav';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';
const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
 
const HomeProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const { id } = useParams();
  const product = homeProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="p-10 text-red-500">Product not found.</p>;
  }
 const dispatch = useDispatch();
const navigate = useNavigate();

const mainImage = selectedImage || product.image;

const handleAddToCart = () => {
  if (!selectedSize) return;

  const productToAdd = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: mainImage,
    size: selectedSize,
  };

  dispatch(addToCart(productToAdd));
  navigate('/checkout');
};
  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row gap-8 p-6 mt-28 px-20">
        {/* Thumbnails */}
        <div className="flex flex-col gap-2  items-center">
          <div className="flex flex-col gap-2">
            {product.thumbnails.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i + 1}`}
                className={`w-16 h-16 rounded object-cover cursor-pointer border-2 ${
                  img === selectedImage ? 'border-black' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Main Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="max-w-md w-full object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-base text-gray-600 mb-1">{product.color}</p>
          <p className="text-lg font-medium mt-1">{product.price}</p>
          <p className="text-sm text-gray-500">
            Get it for <span className="text-black font-semibold">₹650</span> if you <a href="#" className="underline">sign up</a>
          </p>
          
          {/* Size Selector */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">Select Size</p>
              <button className="text-sm underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition ${
                    selectedSize === size ? 'bg-black text-white' : ''
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
  onClick={handleAddToCart}
  className={`mt-6 w-full py-3 rounded-full text-lg font-medium transition ${
    selectedSize
      ? 'bg-black text-white hover:bg-gray-800'
      : 'bg-gray-600 text-white cursor-not-allowed'
  }`}
  disabled={!selectedSize}
>
  {selectedSize ? 'Add to Cart' : 'Select your size'}
</button>

          {/* Delivery Info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Delivery by <span className="font-semibold text-black">Thu, Jun 20</span>
            </p>
            <p>Free shipping for orders over ₹999. 30-day return policy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductPage;
