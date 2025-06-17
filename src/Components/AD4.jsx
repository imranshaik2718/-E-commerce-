import React from 'react'

function AD4() {
  return (
    <div >
      <div className=" bg-[#1a1a1a]  mx-auto  px-20 py-12 mt-5 grid grid-cols-1 md:grid-cols-2 rounded-t-[50px] gap-6 text-white/90 items-center">
              <div >
                <h2 className="text-2xl font-bold mb-2">Join our community</h2>
                <p className="text-white/50">
                  Join our reforestation initiative! When you subscribe we’ll plant a tree in the Brazilian rainforest (in your name).
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4  ">
                <div className="w-full">
                  <label className="block text-sm font-medium  text-white/60 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Example@cariuma.com"
                    className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <button className="text-black bg-white font-semibold px-6 py-2 w-40 rounded cursor-pointer transition">
                  SIGN UP
                </button>
              </div>
            </div>
    </div>
  )
}

export default AD4
