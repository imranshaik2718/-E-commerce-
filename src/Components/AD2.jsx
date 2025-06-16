import React from "react";

import bg from "../assets/Hero/bagbg.jpeg";
function AD2() {
  return (
    <>
    <div className="flex items-center mt-5">
     <h1 className="text-black/60 text-3xl pl-6 pr-2 pb-4 font-extralight">Backpack </h1>
      
<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-backpack3-fill mb-5"  viewBox="0 0 16 16" id="Backpack3-Fill--Streamline-Bootstrap" height="36" width="36">
   
  <path d="M5 10v3h6v-3h-1v0.5a0.5 0.5 0 0 1 -1 0V10z" stroke-width="1"></path>
  <path d="M6 2v0.341a6 6 0 0 0 -1.308 0.653l-0.416 -1.247a1 1 0 0 0 -1.749 -0.284l-0.77 1.027a1 1 0 0 0 -0.149 0.917l0.803 2.407A6 6 0 0 0 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5 -2.5V8c0 -0.771 -0.146 -1.509 -0.41 -2.186l0.801 -2.407a1 1 0 0 0 -0.148 -0.917l-0.77 -1.027a1 1 0 0 0 -1.75 0.284l-0.415 1.247A6 6 0 0 0 10 2.34V2a2 2 0 1 0 -4 0m1 0a1 1 0 0 1 2 0v0.083a6 6 0 0 0 -2 0zm5.941 2.595a6 6 0 0 0 -0.8 -0.937l0.531 -1.595 0.77 1.027zM3.86 3.658a6 6 0 0 0 -0.8 0.937L2.557 3.09l0.77 -1.027zm0.18 3.772a4 4 0 0 1 7.92 0 0.5 0.5 0 1 1 -0.99 0.142 3 3 0 0 0 -5.94 0 0.5 0.5 0 1 1 -0.99 -0.142M4 9.5a0.5 0.5 0 0 1 0.5 -0.5h7a0.5 0.5 0 0 1 0.5 0.5v4a0.5 0.5 0 0 1 -0.5 0.5h-7a0.5 0.5 0 0 1 -0.5 -0.5z" stroke-width="1"></path>
</svg>
      
    </div>
        <div className="w-full relative">
          <div className="absolute inset-0  top-[50%] text-center">
            <div>
              
              <h6 className="mb-4 text-white/60 text-7xl   ">
                Build your own <span className="  font-bold">Travel </span>carry ecosystem
              </h6>
            </div>
          </div>
          <img src={bg} alt="ad" className="w-full h-full object-cover" />
        </div>

      </>   
  );
}

export default AD2;
