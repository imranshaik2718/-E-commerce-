// HomeCart.jsx
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import cart1 from "../assets/BagCart/1.jpeg";
import cart2 from "../assets/BagCart/2.jpeg";
import cart3 from "../assets/BagCart/3.jpeg";
import cart4 from "../assets/BagCart/4.jpeg";
import cart5 from "../assets/BagCart/5.jpeg";
import cart6 from "../assets/BagCart/6.jpeg";
import cart7 from "../assets/BagCart/7.jpeg";
import cart8 from "../assets/BagCart/8.jpeg";
import cart9 from "../assets/BagCart/9.jpeg";
import cart10 from "../assets/BagCart/10.jpeg";
import cart11 from "../assets/BagCart/11.jpeg";
import cart12 from "../assets/BagCart/12.jpeg";
import cart13 from "../assets/BagCart/13.jpeg";
const products = [
  {
    id: 1,
    name: 'Terra.001',
    color: 'Silver Grey',
    price: '₹950',
    image: cart1,
    
  },
  {
    id: 2,
    name: 'Terra.001',
    color: 'Iron Grey',
    price: '₹1050',
    image: cart6,
    
  },
  {
    id: 3,
    name: 'Terra.001',
    color: 'Burlwood Red',
    price: '₹750',
    image: cart7,
    
  },
  {
    id: 4,
    name: 'Terra.001',
    color: 'Eucalyptus Red',
    price: '₹1300',
    image: cart4,
    labels: ['Pre-order', 'New in'],
  },
  {
    id: 5,
    name: 'Terra.001',
    color: 'Blue Navy',
    price: '₹600',
    image: cart5,
    
  },
  {
    id: 6,
    name: 'Terra.001',
    color: 'Charcoal Black',
    price: '₹999',
    image: cart3,
    
  },
  {
    id: 7,
    name: 'Terra.001',
    color: 'Olive Green',
    price: '₹950',
    image: cart2,
    
  },
  {
    id: 8,
    name: 'Terra.001',
    color: 'Sunset Orange',
    price: '₹950',
    image: cart8,
    
  },
  {
    id: 9,
    name: 'Terra.001',
    color: 'Sand Beige',
    price: '₹900',
    image: cart9,
    
  },
  {
    id: 10,
    name: 'Terra.001',
    color: 'Crimson Red',
    price: '₹800',
    image: cart10,
    
  },
  {
    id: 11,
    name: 'Terra.001',
    color: 'Crimson Red',
    price: '₹800',
    image: cart11,
    
  },
  {
    id: 12,
    name: 'Terra.001',
    color: 'Crimson Red',
    price: '₹800',
    image: cart12,
    
  },
  {
    id: 13,
    name: 'Terra.001',
    color: 'Crimson Red',
    price: '₹800',
    image: cart13,
    
  },
];

const BagCart = () => {
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
    <div className="w-full relative px-6 py-10 ">
      <div className="flex mb-6 justify-between">
        <h1 className='hover:underline  '>A New Era of Packing</h1>
        <div>
            
            <button className="border border-black px-4 py-2 rounded-full hover:bg-black/20 shadow-xs shadow-black">View All</button>
        </div>
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
            <div key={product.id} className="min-w-[450px] max-w-[450px]">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-100 object-contain bg-[#f8f8fa] hover:scale-105 duration-500"
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

export default BagCart;