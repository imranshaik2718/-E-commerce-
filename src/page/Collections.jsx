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
      <div className="px-6 py-10">
        <h1 className="text-2xl font-bold mb-6">Your Liked Products</h1>
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
