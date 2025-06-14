// HomeCart.jsx
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Terra.001',
    color: 'Silver Grey',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-silvergrey.png',
    labels: ['New in'],
  },
  {
    id: 2,
    name: 'Terra.001',
    color: 'Iron Grey',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-irongrey.png',
    labels: ['New in'],
  },
  {
    id: 3,
    name: 'Terra.001',
    color: 'Burlwood Red',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-burlwoodred.png',
    labels: ['New in'],
  },
  {
    id: 4,
    name: 'Terra.001',
    color: 'Eucalyptus Red',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-eucalyptusred.png',
    labels: ['Pre-order', 'New in'],
  },
  {
    id: 5,
    name: 'Terra.001',
    color: 'Blue Navy',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-bluenavy.png',
    labels: ['New in'],
  },
  {
    id: 6,
    name: 'Terra.001',
    color: 'Charcoal Black',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-charcoalblack.png',
    labels: ['New in'],
  },
  {
    id: 7,
    name: 'Terra.001',
    color: 'Olive Green',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-olivegreen.png',
    labels: ['Pre-order'],
  },
  {
    id: 8,
    name: 'Terra.001',
    color: 'Sunset Orange',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-sunsetorange.png',
    labels: ['New in'],
  },
  {
    id: 9,
    name: 'Terra.001',
    color: 'Sand Beige',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-sandbeige.png',
    labels: ['New in'],
  },
  {
    id: 10,
    name: 'Terra.001',
    color: 'Crimson Red',
    price: '€149',
    image: 'https://image.tropicfeel.com/products/terra001-crimsonred.png',
    labels: ['Pre-order'],
  },
];

const HomeCart = () => {
  const scrollRef = useRef(null);
 

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = direction === 'left' ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      const newScrollLeft = container.scrollLeft + scrollAmount;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const percentScrolled = Math.min(Math.max(newScrollLeft / maxScrollLeft, 0), 1);
      setScrollPercent(percentScrolled);
    }
  };

  

  return (
    <div className="w-full relative px-6 py-10">
      <div className="flex space-x-4 mb-6">
        <button className="bg-black text-white px-4 py-2 rounded-full">New in</button>
        <button className="border border-black px-4 py-2 rounded-full">Best Sellers</button>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth space-x-6 pb-2   no-scrollbar"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[250px] max-w-[250px]">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                {product.labels.map((label, index) => (
                  <span
                    key={index}
                    className={`absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${
                      label === 'New in'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-orange-100 text-orange-600'
                    }`}
                  >
                    {label}
                  </span>
                ))}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-contain"
                />
              </div>
              <div className="mt-2 text-sm">
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">{product.color}</p>
                <p className="font-medium mt-1">{product.price}</p>
              </div>
            </div>
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