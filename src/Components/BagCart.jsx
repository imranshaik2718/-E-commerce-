// HomeCart.jsx
import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bags from "../Data/Bag";
import { Link } from 'react-router-dom'
 

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
            
           <Link to="/Bag"> <button className="border cursor-pointer border-black px-4 py-2 rounded-full hover:bg-black/20 shadow-xs shadow-black">View All</button></Link>
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
          {bags.map((bag) => (
            <div key={bag.id} className="min-w-[450px] max-w-[450px]">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-100 object-contain bg-[#f8f8fa]   duration-500"
                />
                 
              </div>
              <div className="mt-2 text-sm">
                <p className="font-semibold">{bag.name}</p>
                <p className="text-gray-600">{bag.color}</p>
                <p className="font-medium mt-1">{bag.price}</p>
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