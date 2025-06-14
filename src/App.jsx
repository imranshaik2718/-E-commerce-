import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
// import Demo from './Components/Demo'
import HomeCart from './Components/HomeCart'
import AD from './Components/AD'
import AD2 from './Components/AD2'
import HomeBack from './Components/HomeBack'

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      {/* <Demo/> */}
      <HomeCart/>
      <AD/>
      <HomeBack/>
      <AD2/>
    </div>
  )
}

export default App
