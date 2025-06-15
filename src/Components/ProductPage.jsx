import React, { useState } from 'react';
import { Star } from 'lucide-react';

const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
const colors = [
  '#fef9c3', '#f5f5f4', '#d4d4d8', '#0f172a', '#a7f3d0', '#fef9c3', '#fda4af'
];

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Images */}
      <div className="flex flex-col gap-2 items-center">
        {/* Thumbnail images */}
        <div className="flex flex-col gap-2">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="w-16 h-16 bg-yellow-100 rounded" />
          ))}
        </div>
      </div>

      {/* Main Product Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://image.tropicfeel.com/catalog/product/s/u/sunsetbreeze_lemon_yellow_side_1_1.png"
          alt="Sunset Breeze Lemon Yellow"
          className="max-w-md w-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        <span className="text-green-600 text-sm font-medium">New Generation</span>
        <h1 className="text-3xl font-semibold">Sunset Breeze</h1>
        <p className="text-lg font-medium mt-1">€99</p>
        <p className="text-sm text-gray-500">
          Or <span className="text-black font-semibold">€89.10</span> if you <a href="#" className="underline">sign up for our newsletter</a>.
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-lg font-bold">4.30</span>
          <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
          <a href="#" className="text-sm text-gray-500 underline">3002 Reviews</a>
        </div>

        {/* Color Selector */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">Lemon Yellow</p>
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
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Select size button */}
        <button className="mt-6 w-full py-3 bg-gray-600 text-white rounded-full text-lg font-medium">
          Select your size
        </button>

        {/* Shipping info */}
        <div className="mt-4 text-sm text-gray-600">
          <p>
            Estimated delivery: <span className="font-semibold text-black">Thu, Jun 19 - Fri, Jun 20</span>
          </p>
          <p>Free shipping for orders over €99. 30-day returns & free exchanges.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
