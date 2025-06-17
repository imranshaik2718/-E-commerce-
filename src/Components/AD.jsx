import React from 'react';
import Ad from "../assets/Hero/AD.jpeg"; // your background image
import { Link } from 'react-router-dom';

function AD() {
  return (
    <div>
    
    <div className="relative w-full ">
      <img
        src={Ad}
        alt="ad"
        className="w-full  object-cover"
        />
      <div className="absolute   inset-0 flex pl-5 flex-col items-center md:items-start justify-center text-center md:text-left p-4 md:p-10  ">
        <h3 className="mb-2 text-white text-3xl md:text-5xl font-semibold  ">
          The original <mark className="bg-transparent text-white">water</mark> travel shoe
        </h3>
        <h6 className="mb-6 text-white text-lg md:text-xl">
          Engineered to get wet &amp; dry fast
        </h6>
        <Link to="/footwear"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold transition hover:bg-gray-200"
          >
          Shop now
        </Link>
      </div>
    </div>
            </div>
  );
}

export default AD;
