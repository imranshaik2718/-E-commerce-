import React from 'react'
import img1 from "../assets/Hero/Bagpack.jpeg";
import img2 from "../assets/Hero/backpack2.jpeg";
import img3 from "../assets/Hero/backpack3.png";
function AD2() {
  return (
    <div>
<div className="container flex justify-between  md:items-start self-start md:self-center text-center md:text-left p-4 md:p-3 font-sans">
      <div>
        <h3 className="mb-1 text-black text-3xl md:text-4xl font-extralight">
        Backpacks
      </h3>
      <h6 className="mb-4 text-black text-lg md:text-xl">
        Build your own travel carry ecosystem
      </h6>
        </div>
      <div>
      <a
        href="/collections/backpacks-luggage"
        className="bg-gray-400 text-black  px-6 rounded-full font-medium transition hover:bg-gray-200"
        >
        Shop now
      </a>
          </div>
    </div>
    <div className='flex'>
    
    <div className='w-[25%]'> <img
              src={img2}
              alt="ad"
              className="w-full h-full object-cover"
              /></div>
              <div className='w-[25%]'> <img
              src={img3}
              alt="ad"
              className="w-full h-full object-cover"
              /></div>
              <div className='w-[50%]'>
      <img
              src={img1}
              alt="ad"
              className="w-full h-full object-cover"
              />
    </div>
              </div>

              </div>
  )
}

export default AD2
