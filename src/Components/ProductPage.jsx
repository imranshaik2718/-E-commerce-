import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star } from 'lucide-react';
import Allshoes from "../Data/AllShoes";
import Nav from '../HomePage/Nav';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const colors = [
  '#fef9c3', '#f5f5f4', '#d4d4d8', '#0f172a', '#a7f3d0', '#fef9c3', '#fda4af'
];

const AllshoePage = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const Allshoe = Allshoes.find((p) => p.id === parseInt(id));

  if (!Allshoe) return <p className="p-10 text-red-500">Allshoe not found.</p>;

  const AllshoeImages = Allshoe?.thumbnails || [];
  const mainImage = selectedImage || Allshoe.image;
  const dispatch = useDispatch();
const navigate = useNavigate();

const handleAddToCart = () => {
  if (!selectedSize) return;

  const productToAdd = {
    id: Allshoe.id,
    name: Allshoe.name,
    price: Allshoe.price,
    image: mainImage,
    size: selectedSize,
  };

  dispatch(addToCart(productToAdd));
  navigate('/checkout');
};


  return (
    <div>
      <Nav />
      <div className="flex flex-col md:flex-row gap-8 p-6 mt-14">
        {/* Left Thumbnails */}
        <div className="flex flex-col gap-2 items-center">
          <div className="flex flex-col gap-2">
            {AllshoeImages.map((img, i) => (
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

        {/* Main Allshoe Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={mainImage}
            alt={Allshoe.name}
            className="max-w-md w-full object-contain"
          />
        </div>

        {/* Allshoe Details */}
        <div className="flex-1">
          
          <h1 className="text-3xl font-semibold">{Allshoe.name}</h1>
          <p className="text-base text-gray-600 mb-1">{Allshoe.color}</p>
          <p className="text-lg font-medium mt-1">{Allshoe.price}</p>
          <p className="text-sm text-gray-500">
            Or <span className="text-black font-semibold">₹650.0</span> if you <a href="#" className="underline">sign up for our newsletter</a>.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <span className="text-lg font-bold">4.30</span>
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
            <a href="#" className="text-sm text-gray-500 underline">3002 Reviews</a>
          </div>

          {/* Color Selector */}
          <div className="mt-4">
            <p className="text-sm text-gray-700">Color Options</p>
            <div className="flex items-center gap-2 mt-2 overflow-x-auto">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">EU size</p>
              <button className="text-sm underline">View Size Guide</button>
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

          {/* Fit scale */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Runs Small</span>
              <span>True to size</span>
              <span>Runs Large</span>
            </div>
            <div className="relative mt-2 h-2 bg-gray-200 rounded-full">
              <div className="absolute left-1/2 transform -translate-x-1/3 w-4 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Select size button */}
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



          {/* Shipping info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              Estimated delivery: <span className="font-semibold text-black">Thu, Jun 19 - Fri, Jun 20</span>
            </p>
            <p>Free shipping for orders over ₹999. 30-day returns & free exchanges.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllshoePage;
