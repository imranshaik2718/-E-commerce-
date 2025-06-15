import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
// import Demo from './Components/Demo'
import HomeCart from '../Components/HomeCart'
import AD from '../Components/AD'
import AD2 from '../Components/AD2'
import SNEAKERS from '../Components/SNEAKERS'
import BagCart from '../Components/BagCart'
import ProductPage from '../Components/ProductPage'

function HomePage() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      {/* <Demo/> */}
      <HomeCart/>
      <AD/>
      <SNEAKERS/>
      <AD2/>
      <BagCart/>
      <ProductPage/>
    </div>
  )
}

export default HomePage
