import React, { useState } from "react";
import { Link } from "react-router-dom";
import Allshoes from "../Data/AllShoes";
import img1 from "../assets/AllCart/FootwareHero.jpeg";
import Nav from "../HomePage/Nav";

function Footwear() {
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedTag, setSelectedTag] = useState("all");
  const [showExtraButtons, setShowExtraButtons] = useState(false);
  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const filteredAllshoes = Allshoes.filter(
    (Allshoe) => selectedTag === "all" || Allshoe.tag === selectedTag
  );

  const hasMore = visibleCount < filteredAllshoes.length;

  return (
    <>
      <div>
        <Nav />

        <div className="w-full h-auto flex justify-center items-center mt-15">
          <img src={img1} className="shadow-lg" />
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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-5">
            {filteredAllshoes.slice(0, visibleCount).map((Allshoe) => (
              <Link
                to={`/Allshoe/${Allshoe.id}`}
                key={Allshoe.id}
                className="block"
              >
                <div className="bg-[#f8f8fa] rounded-lg overflow-hidden">
                  <img
                    src={Allshoe.image}
                    alt={Allshoe.name}
                    className="w-full h-[360px] object-contain hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3 text-sm pl-7">
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
            <div className="flex justify-center mt-10">
              <button
                onClick={handleViewMore}
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Footwear;
