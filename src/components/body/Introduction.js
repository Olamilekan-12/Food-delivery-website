import React from 'react'
import './Introduction.css'
import foodImage from '../../images/intomeal.png'



const Introduction = () => {
  return (
    <div className='intro'>
        <div className='top'>
            <img src={foodImage} alt='food' className='intro-meal'/>
        </div>
        <div className='bottom'>
            <div className='header'>
                <h1>Food delivery and more</h1>
            </div>
            <div className='header2'>
                <p>Groceries, shops, pharmacies, anything!</p>
            </div>
            <div className='header3'>
                <div className='icon-input'>
                    <div className='icon-cont'>
                    <i class="fa-solid fa-flag"></i>
                    </div>
                <input type='text' placeholder="What's your address?"/>
                </div>
                <div className='header3-text'>
                    <span>Use current location</span>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Introduction