import React from 'react';
import bags from "../Data/AllBags";
import Nav from '../HomePage/Nav';

const BagPack = () => {
  return (
    <div>
        <Nav/>
    <div className="w-full px-6 py-10 mt-10">
      
       

      {/* Grid Layout for Bags */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {bags.map((bag) => (
          <div key={bag.id} className=" rounded-lg overflow-hidden     transition duration-300">
            <img
              src={bag.image}
              alt={bag.name}
              className="w-full h-64 object-contain   duration-500"
            />
            <div className="p-4 text-sm">
              <p className="font-semibold">{bag.name}</p>
              <p className="text-gray-600">{bag.color}</p>
              <p className="font-medium mt-1">{bag.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BagPack;
