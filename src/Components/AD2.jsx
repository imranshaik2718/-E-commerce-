import React from "react";
import img1 from "../assets/Hero/Bagpack.jpeg";
import img2 from "../assets/Hero/backpack2.jpeg";
import img3 from "../assets/Hero/backpack3.png";
function AD2() {
  return (
    <div>
      <h3 className=" text-black  text-center md:text-4xl font-extralight hover:underline mt-5 -mb-3">
                Backpacks
              </h3>
      <div className="container flex justify-between  items-center md:items-start self-start md:self-center text-center md:text-left md:p-3 font-sans"></div>
      <div className="flex w-full h-[400px]">
        <div className="w-[25%]">
          <img src={img2} alt="ad" className="w-full h-full object-cover" />
        </div>
        <div className="w-[50%] relative">
          <div className="absolute inset-0 left-1/24 text-center">
            <div>
              
              <h6 className="mb-4 text-black text-lg md:text-xl ">
                Build your own travel carry ecosystem
              </h6>
            </div>
          </div>
          <img src={img1} alt="ad" className="w-full h-full object-cover" />
        </div>

        <div className="w-[25%]">
          {" "}
          <img src={img3} alt="ad" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default AD2;
