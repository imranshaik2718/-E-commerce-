import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import vid1 from "../assets/AllCart/MainCart.mp4";
import { motion } from 'framer-motion';
import { FaLock} from 'react-icons/fa';
 
const Footer = () => {
  return (
    <>
    <div className='bg-[#1a1a1a]'>
      <video src={vid1} className='-mb-[1px]' loop autoPlay></video>
    </div>
    <div className="bg-[#1a1a1a] border-b border-white/25 flex flex-col md:flex-row justify-around items-center py-10 text-center">
        <div className="mb-6 md:mb-0 text-white">
  <img
    src="https://img.icons8.com/ios-filled/50/ffffff/shipped.png"
    alt="shipping"
    className="mx-auto mb-2"
  />
  <p className="font-semibold">Fast and free shipping</p>
  <p className="text-sm">Free shipping for orders over $99.</p>
</div>
<motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-white"
          >
            <FaLock className="text-2xl mb-2" />
            <p className="font-medium">Secure Payment</p>
          </motion.div>
<div className="text-white">
  <img
    src="https://img.icons8.com/ios-filled/50/ffffff/return.png"
    alt="returns"
    className="mx-auto mb-2"
  />
  <p className="font-semibold">Easy returns & exchanges</p>
  <p className="text-sm">30-day returns & free exchanges.</p>
</div>

      </div>
      
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-20 pt-16 pb-10">

      <div className="grid md:grid-cols-4 gap-10 mt-12">
        <div>
            <div className='flex items-center mb-5'>
          <h2 className="text-3xl font-bold ">SPYKAR </h2>
          <svg version="1.0"   xmlns="http://www.w3.org/2000/svg"
 width="1024.000000pt" height="1024.000000pt" className='w-15 h-15' viewBox="0 0 1024.000000 1024.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill="white" stroke="black" >
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
            </div>
          <div className="mt-6">
            
            <p className="text-sm mt-2">Certified B Corporation</p>
          </div>
        </div>
 
        <div>
          <h3 className="font-semibold mb-2">Join us and get 10% off</h3>
          <input
            type="email"
            placeholder="Introduce your email"
            className="bg-transparent border-b border-white w-full py-2 mb-2 placeholder-white outline-none"
          />
          <button className="text-white text-xl">→</button>
          <p className="text-xs text-gray-400 mt-2">
            By signing up you are agreeing to the terms and conditions. Read our{' '}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Impact</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Stores</a></li>
            <li><a href="#">Ethics Channel</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">Get in touch</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Commercial partnerships</a></li>
            <li><a href="#">Creators & ambassadors</a></li>
            <li><a href="#">Press and Media</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Warranty</a></li>
            <li><a href="#">Order tracking</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-2">Follow us on social media</h3>
          <div className="flex gap-3 mt-2 text-lg">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
