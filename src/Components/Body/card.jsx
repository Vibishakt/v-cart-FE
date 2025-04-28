import React from 'react'
import './card.css'
import card_1 from '../Assets/card_1.avif'
import card_2 from '../Assets/card_2.avif'
import card_3 from '../Assets/card_3.jpg'
import card_4 from '../Assets/card_4.webp'

const card = () => {
  return (
    <div class='card'>
        <div calss='card-list'>
        <img src="card_1" alt=""/>
        <p>Myra Petite Kurti</p>
        <p>$520</p>
        </div>
        <div calss='card-list'>
        <img src="card_2" alt=""/>
        <p>Myra Petite Kurti</p>
        <p>$420</p>
        </div>
        <div calss='card-list'>
        <img src="card_3" alt=""/>
        <p>Myra Petite Kurti</p>
        <p>$620</p>
        </div>
        <div calss='card-list'>
        <img src="card_4" alt=""/>
        <p>Myra Petite Kurti</p>
        <p>$580</p>
        </div>
    </div>
  )
}

export default card