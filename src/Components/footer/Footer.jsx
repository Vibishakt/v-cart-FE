import React from 'react'
import './Footer.css'
import facebook_icon from '../Assets/facebook_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div class='footer'>
      <div class='footer-list'>
        <p>COMPANY</p>
        <p>ABOUT</p>
        <p>SHIPPING</p>
        <p>CONTACT</p>
      </div>
      <div class='footer-social-icon'>
        <ul>
        <img src={facebook_icon} alt=""/>
        
       
        <img src={instagram_icon} alt=""/>
      
     
        <img src={whatsapp_icon} alt=""/>
      
        </ul>
      </div>
      <hr/>
      <div class='footer-copyright'>
       
        <p>Copyright @2025-All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer