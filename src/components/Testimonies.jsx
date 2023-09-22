import React from 'react';
import './Testimonies.css';
import {FaQuoteLeft} from 'react-icons/fa';
import person from '../assets/person.jpg';


const Testimonies = () => {
  return (
    <div className='testt'>
           <div className='test'>
            <img src={person} alt='' />
             <FaQuoteLeft className='icon' />
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum voluptatibus fugiat, illo suscipit debitis 
                laudantium recusandae  reprehenderit
                 
            </p>
    </div>
    <div className='test'>
            <img src={person} alt='' />
             <FaQuoteLeft className='icon' />
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum voluptatibus fugiat, illo suscipit debitis 
                laudantium recusandae  reprehenderit
                
            </p>
    </div>
    <div className='test'>
            <img src={person} alt='' />
             <FaQuoteLeft  className='icon'/>
            <p>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nostrum voluptatibus fugiat, illo suscipit debitis 
                laudantium recusandae  reprehenderit
               
            </p>
    </div>
    </div>

  )
}

export default Testimonies
