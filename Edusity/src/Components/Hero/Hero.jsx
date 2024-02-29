import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png';


const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>
                In the history of modern astronomy, there is probably no one greater
                 leap forward than the building and launch of the space telescope known as the Hubble.
            </p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero