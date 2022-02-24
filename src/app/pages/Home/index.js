import React from 'react'
import Header from './../../shared/Header/index';
import Slider from './../../shared/Slider/slider.js';
import Categories from '../../shared/categories';
const Navbar = () => {
  return (
<div>

    <div className=' max-h-8  text-center text-white bg-yellow-400 font-display	'>
        Super Deal Free Shipping On Orders Over $50
    </div>
    <div className="px-8 mt-4">
    <Header/>
    </div>
    <div>
      <Slider/>
  
    </div>
    <div>
   <Categories/>
    </div>
    
 </div>
 
    
  )
}

export default Navbar
