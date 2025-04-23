import React from 'react'
import './Body.css' 
import image2 from '../Assets/image 2.webp'
const Body = () => {
  return (
    <div class='body'>
        <div class='body-left'>
            <h1>Discover and Finds Your Own Fashions</h1>
            <p>Explore our curated collections of stylish clothing tailored to your unique taste.</p>
            <div class='body-left-btn'>
              <button>Explore Now</button>
            </div>
        </div>
        <div class='body-right'>
         <img src={image2} alt=""/>
        </div>
    </div>
  )
}