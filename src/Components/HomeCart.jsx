import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeProducts from '../Data/homeProducts';

const HomeCart = () => {
  const scrollRef = useRef(null);
  const [isBestSeller, setIsBestSeller] = useState(false); // 🔁 Toggle sort

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -400 : 400;
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // 🔄 Get products based on sort mode
  const displayedProducts = isBestSeller
    ? [...homeProducts].reverse()
    : homeProducts;

  return (
    <div className="w-full relative px-6 py-10 bg-white">
      <div className="flex mb-6 justify-between">
        <div className="space-x-3">
          <button
            onClick={() => setIsBestSeller(false)}
            className={`px-4 py-2 rounded-full shadow-xs shadow-black ${!isBestSeller ? 'bg-black text-white' : 'border border-black'}`}
          >
            New in
          </button>
          <button
            onClick={() => setIsBestSeller(true)}
            className={`px-4 py-2 rounded-full shadow-xs shadow-black ${isBestSeller ? 'bg-black text-white' : 'border border-black'}`}
          >
            Best Sellers
          </button>
        </div>
        <Link to="/footwear">
          <button className="border border-black px-4 py-2 rounded-full shadow-xs shadow-black hover:bg-black/10">View All</button>
        </Link>
      </div>

      <div className="relative bg-white">
        <button
          onClick={() => scroll('left')}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 pb-2 no-scrollbar"
        >
          {displayedProducts.map((product) => (
            <Link
              to={`/homeProduct/${product.id}`}
              key={product.id}
              className="min-w-[450px] max-w-[450px] block"
            >
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-100 object-contain bg-white hover:scale-105 duration-500"
                />
              </div>
              <div className="mt-2 text-sm">
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.color}</p>
                <p className="font-medium mt-1">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HomeCart;
