
import React, { useState } from "react";
import img1 from "../assets/Hero/Bagpack.jpeg";
import img2 from "../assets/Hero/backpack2.jpeg";
import img3 from "../assets/Hero/backpack3.png";
 
function AD3() {
     
  return (
    <div>
      
       
      <div className="flex w-full h-[400px] py-3 bg-[#1a1a1a] not-first: ">
        <div className="w-[25%]">
          <img src={img2} alt="ad" className="w-full h-full object-cover rounded-bl-[90px] rounded-tl-[90px]" />
        </div>
        <div className="w-[50%] relative">
          <div className="absolute inset-0 left-1/24 text-center">
            <div>
              
               
            </div>
          </div>
          <img src={img1} alt="ad" className="w-full h-full object-cover" />
        </div>

        <div className="w-[25%]">
          {" "}
          <img src={img3} alt="ad" className="w-full h-full object-cover rounded-br-[90px] rounded-tr-[90px]" />
        </div>
      </div>
    </div>
  );
}

export default AD3;
