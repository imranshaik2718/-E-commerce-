import React from 'react'
// import { a  } from 'react-router-dom';
function NavBar() {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className='flex'>

        <a href="/">
          <img src="/logo.svg" alt="SPYKAR" className="h-8 w-auto" />
          
        </a ><span>SPYKAR</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {['Footwear', 'Backpacks', 'Apparel', 'Accessories', 'Collections'].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="hover:opacity-75">{item}</a >
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a href="/search" className="hover:opacity-75">Search</a >
          <a href="/cart" className="hover:opacity-75">Cart</a >
          <a href="/account" className="hover:opacity-75">Account</a >
          <button className="md:hidden">Menu</button>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavBar
