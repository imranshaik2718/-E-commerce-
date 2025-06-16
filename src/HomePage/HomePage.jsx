import React from 'react'
import NavBar from '../Components/NavBar'
import Hero from '../Components/Hero'
// import Demo from './Components/Demo'
import HomeCart from '../Components/HomeCart'
import AD from '../Components/AD'
import AD2 from '../Components/AD2'
import SNEAKERS from '../Components/SNEAKERS'
import BagCart from '../Components/BagCart'
import Footer from '../Components/Footer'


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
      <Footer/>
    </div>
  )
}

export default HomePage
