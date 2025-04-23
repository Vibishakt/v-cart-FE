import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpeg'

export const Navbar = () => {
  return (
    <div class='navbar'>
      <div class='nav-logo'>
        <img src={logo} alt="" />
      </div>
      <ul class='nav-menu'>
        <li>Home</li>
        <li>Shop</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      <div class='nav-login'>
        <button onClick={()=>localStorage.setItem('name','Vibisha')}>Login</button>
      </div>
    </div>
  )
}