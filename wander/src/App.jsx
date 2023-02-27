import React from 'react'
import Cards from './Components/Cards/Cards'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Nabar/Navbar'
import Review from './Components/Review/Review'
import Staff from './Components/Staff/Staff'
import Tour from './Components/Tours/Tour'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tour/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </div>
  )
}

export default App
