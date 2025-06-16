import React from "react";
import { useSelector } from "react-redux";
import Allshoes from "../Data/AllShoes";
import Nav from "../HomePage/Nav";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Collections() {
  const likedItems = useSelector((state) => state.cart.likedItems);

  const likedProducts = Allshoes.filter((product) =>
    likedItems.includes(product.id)
  );

  return (
    <>
      <Nav />
      <div className="px-6 pt-20">
        <div className="flex items-center gap-3">

        <h1 className="text-4xl font-bold">Collections 
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" class="bi bi-collection" viewBox="0 0 16 16" id="Collection--Streamline-Bootstrap" height="16" width="16">
  <path d="M2.5 3.5a0.5 0.5 0 0 1 0 -1h11a0.5 0.5 0 0 1 0 1zm2 -2a0.5 0.5 0 0 1 0 -1h7a0.5 0.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0 -1.5 -1.5h-13A1.5 1.5 0 0 0 0 6zm1.5 0.5A0.5 0.5 0 0 1 1 13V6a0.5 0.5 0 0 1 0.5 -0.5h13a0.5 0.5 0 0 1 0.5 0.5v7a0.5 0.5 0 0 1 -0.5 0.5z" stroke-width="1"></path>
</svg>
        </div>
        <h1 className=" mb-6">Your Liked Products ( {likedProducts.length} )</h1>
        {likedProducts.length === 0 ? (
          <p className="text-gray-600">No products in your collection yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {likedProducts.map((product) => (
              <Link
                to={`/Allshoe/${product.id}`}
                key={product.id}
                className="block"
              >
                <div className="bg-[#f8f8fa] rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[360px] object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-sm">
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-gray-600 text-xs">{product.color}</p>
                  <div className="flex gap-2 items-center">
                    <p className="font-medium mt-1">{product.price}</p>
                    {product.discount && (
                      <>
                        <p className="line-through text-gray-400 text-sm mt-1">
                          {product.originalPrice}
                        </p>
                        <p className="text-red-500 text-sm font-semibold mt-1">
                          {product.discount}% off
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Collections;
