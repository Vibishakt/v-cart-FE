import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpeg'

export const Navbar = () => {

  const handleLogin =()=>{
    localStorage.setItem('name','Vibisha')
  }
  
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}