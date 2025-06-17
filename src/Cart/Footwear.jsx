import React, { useState } from "react";
import { Link } from "react-router-dom";
import Allshoes from "../Data/AllShoes";
import img1 from "../assets/AllCart/FootwareHero.jpeg";
import Nav from "../HomePage/Nav";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
 import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toggleLike } from "../redux/cartSlice"; // adjust path if needed


function Footwear() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedTag, setSelectedTag] = useState("all");
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };
const dispatch = useDispatch();

  const filteredAllshoes = Allshoes.filter(
    (Allshoe) => selectedTag === "all" || Allshoe.tag === selectedTag
  );

  const hasMore = visibleCount < filteredAllshoes.length;
const likedItems = useSelector((state) => state.cart.likedItems);

  return (
    <>
      <div>
        <Nav />

        <div className="w-full h-auto relative flex justify-end items-center mt-15">
          <img src={img1} className="shadow-2xl" />
          <div className="absolute text-3xl pr-15 text-center ">
           <div className="flex items-center"> 
<svg version="1.0"   xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="1024.000000pt" className='w-19 h-19' viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill="black" stroke="black">
<path d="M4145 7415 c-22 -8 -54 -30 -71 -50 -34 -38 -46 -77 -63 -198 -33
-238 -209 -413 -491 -489 -69 -18 -111 -22 -225 -22 -239 0 -342 41 -538 218
-70 64 -141 123 -157 131 -71 37 -184 8 -235 -59 -33 -44 -40 -88 -26 -173 14
-82 77 -306 97 -344 54 -105 222 -183 451 -210 158 -18 345 8 688 96 329 85
362 90 585 89 192 0 198 -1 426 -47 258 -53 298 -56 354 -27 50 26 73 60 73
110 0 52 -16 76 -200 307 -87 110 -237 300 -333 423 -208 266 -231 282 -335
245z"/>
<path d="M5185 6198 c-11 -6 -42 -31 -68 -55 -26 -25 -69 -54 -95 -66 -52 -24
-16 -23 -547 -16 -206 3 -266 1 -341 -14 -125 -24 -317 -81 -571 -171 -412
-147 -667 -170 -994 -90 -122 29 -158 30 -209 4 -46 -23 -74 -60 -90 -118 -28
-107 58 -227 197 -271 191 -60 558 -54 801 14 58 17 181 72 367 165 282 140
373 177 506 205 180 38 267 45 559 45 349 0 397 7 489 75 60 44 133 131 146
173 9 32 -12 88 -42 112 -28 22 -77 26 -108 8z"/>
<path d="M5512 5895 c-12 -9 -42 -44 -67 -79 -81 -114 -155 -172 -270 -211
-78 -26 -132 -34 -343 -50 -462 -35 -645 -97 -1032 -351 -295 -194 -423 -252
-670 -305 -92 -21 -132 -23 -330 -23 -163 0 -252 5 -322 17 -163 28 -237 19
-297 -36 -32 -30 -61 -94 -61 -138 0 -51 46 -136 92 -169 78 -57 137 -58 383
-10 359 71 805 66 1159 -11 142 -31 236 -60 415 -128 55 -21 101 -37 101 -36
0 2 -18 25 -40 51 -23 27 -57 81 -77 121 -30 62 -36 85 -41 161 -4 73 -1 103
17 160 49 164 192 290 424 375 132 49 228 72 467 112 338 57 436 105 566 278
84 112 104 175 74 232 -27 50 -103 71 -148 40z"/>
<path d="M5873 5635 c-13 -9 -44 -57 -70 -108 -38 -74 -65 -109 -138 -182
-111 -112 -201 -161 -420 -231 -307 -97 -454 -168 -563 -273 -135 -129 -136
-283 -4 -465 102 -140 343 -269 711 -381 29 -9 55 -14 57 -12 2 2 -38 35 -88
73 -276 208 -350 444 -205 656 62 91 148 157 378 295 112 66 229 143 260 170
122 105 232 281 233 371 1 37 -4 48 -32 73 -37 33 -84 38 -119 14z"/>
<path d="M6240 5437 c-29 -24 -39 -43 -60 -122 -37 -141 -114 -230 -340 -398
-190 -141 -226 -173 -270 -239 -102 -153 -88 -310 43 -470 178 -217 601 -374
1060 -393 130 -5 131 -5 87 11 -115 41 -311 119 -365 146 -208 105 -392 272
-461 423 -52 114 -50 248 7 364 26 52 64 99 184 221 149 153 209 233 240 320
22 62 19 88 -14 121 -32 31 -83 39 -111 16z"/>
<path d="M6594 5286 c-14 -10 -27 -39 -39 -88 -28 -118 -64 -178 -203 -337
-106 -122 -138 -223 -108 -342 23 -87 61 -153 133 -226 229 -232 676 -370
1077 -333 295 28 615 129 789 249 52 35 166 154 194 201 83 137 60 298 -59
405 -63 57 -115 73 -393 120 -452 77 -907 197 -1222 321 -112 43 -142 49 -169
30z"/>
<path d="M2839 4349 c-124 -13 -298 -56 -376 -93 -85 -41 -160 -107 -191 -170
-49 -98 -48 -228 4 -333 39 -81 145 -182 235 -226 159 -78 -45 -72 2294 -72
2334 0 2164 -5 2440 71 155 42 280 90 395 152 94 50 220 123 220 127 0 2 -41
-12 -90 -31 -201 -76 -376 -119 -665 -166 -107 -17 -641 -17 -790 1 -326 38
-684 106 -1050 201 -256 67 -373 103 -850 260 -247 82 -524 167 -614 190 -333
81 -707 116 -962 89z"/>
</g>
</svg>
          <h1 className="font-mono">New Colors.
Iconic Comfort.
</h1>
</div >
<p className="text-[20px]"> Our limited-edition collection pairs breathability with versatility.</p>
          </div>
        </div>
        <h1 className="p-2 ml-8">
          Home / Footwear / {`${selectedTag.toLowerCase()} Sneakers `}
        </h1>

        <div className="w-full px-6 pb-10">
          <div className="flex  justify-between items-center px-14">
            <h1 className="text-lg font-semibold hover:underline">
              {selectedTag === "all"
                ? `All Sneakers (${filteredAllshoes.length})`
                : `${selectedTag.toUpperCase()} Sneakers (${
                    filteredAllshoes.length
                  })`}
            </h1>

            <div>
              <div className="flex justify-center mt-4 space-x-4">
                {/* Initial button */}
                {!showExtraButtons && (
                  <button
                    onClick={() => setShowExtraButtons(true)}
                    className="px-4 py-2 rounded-full border border-black"
                  >
                    More Filters
                  </button>
                )}

                {/* Extra filter buttons */}
                {showExtraButtons && (
                  <div className="flex gap-4">
                    {/* Replace these with your own filter buttons */}
                    <button
                      onClick={() => setSelectedTag("all")}
                      className={`px-4 py-2 rounded-full border ${
                        selectedTag === "all"
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setSelectedTag("Water proof")}
                      className={`px-4 py-2 rounded-full border ${
                        selectedTag === "Water proof"
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      Water proof
                    </button>
                    <button
                      onClick={() => setSelectedTag("Water Friendly")}
                      className={`px-4 py-2 rounded-full border ${
                        selectedTag === "Water Friendly"
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      Water Friendly
                    </button>

                    <button
                      onClick={() => setSelectedTag("Lifestyle Sneakers")}
                      className={`px-4 py-2 rounded-full border ${
                        selectedTag === "Lifestyle Sneakers"
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      Lifestyle Sneakers
                    </button>
                    <button
                      onClick={() =>
                        setSelectedTag("Adventure Travel Sneakers")
                      }
                      className={`px-4 py-2 rounded-full border ${
                        selectedTag === "Adventure Travel Sneakers"
                          ? "bg-black text-white"
                          : "bg-white text-black border-black"
                      }`}
                    >
                      Adventure Travel Sneakers
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-5 mt-8">
  {filteredAllshoes.slice(0, visibleCount).map((Allshoe) => (
    <Link
      to={`/Allshoe/${Allshoe.id}`}
      key={Allshoe.id}
      className="block"
    >
      <div className="relative bg-[#f8f8fa] rounded-lg overflow-hidden">
        <img
          src={Allshoe.image}
          alt={Allshoe.name}
          className="w-full h-[360px] object-contain hover:scale-105 transition-transform duration-500"
        />
        {/* Heart Icon Positioned on Top Right */}
        <motion.button
          onClick={(e) => {
            e.preventDefault(); // prevent link navigation on heart click
            dispatch(toggleLike(Allshoe.id));
          }}
          className="absolute top-3 right-3 text-xl z-10"
          whileTap={{ scale: 1.3 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.div
            animate={{
              scale: likedItems.includes(Allshoe.id) ? 1.2 : 1,
              color: likedItems.includes(Allshoe.id) ? '#DC2626' : '#9CA3AF',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FaHeart />
          </motion.div>
        </motion.button>
      </div>
      <div className="mt-3 text-sm pl-7 ">
        <p className="font-semibold">{Allshoe.name}</p>
        <p className="text-gray-600 text-xs">{Allshoe.color}</p>
        <div className="flex gap-2 items-center">
          <p className="font-medium mt-1">{Allshoe.price}</p>
          {Allshoe.discount && (
            <>
              <p className="line-through text-gray-400 text-sm mt-1">
                {Allshoe.originalPrice}
              </p>
              <p className="text-red-500 text-sm font-semibold mt-1">
                {Allshoe.discount}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  ))}
</div>


          {/* View More Button */}
          {hasMore && (
            <div className="flex justify-center items-center mt-10 relative">
              <button
                onClick={handleViewMore}
                className="px-6 py-2 my-6 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                View More
              </button>
              <div className="w-[60%] absolute h-1 bottom-0 rounded-[50%] shadow shadow-black bg-black"> </div>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Footwear;
