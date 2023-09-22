import React from 'react';
import './Hero.css';
import photo from '../assets/photos.jpg';

const Hero = () => {
  return (
    <div className='hero'>
          <div  className='first'>
                <div className='title'>
                  <span> Educate</span>  yourself on Legal Documents through our AI expert
                </div>
                <p>
                  Our App deliver simplified plain documents analysed from complex & sophisticated
                   legal documents. 
                </p>
                <div className='buttonn'>
                <button className='grad'>
                   Talk to our AI Expert
                </button>
                <button className='grad'>
                  <a href='http://localhost:8501' target="_blank" > Simplify Doc </a>
                   
                </button>
                </div>
               
          </div>
          <div className='sec'>
            <img src={photo} alt=" " />
          </div>
    </div>
  )
}

export default Hero
