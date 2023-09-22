import React, {useState} from 'react';
import './Header.css'

const Header = () => {
  const [cases, SetCases] = useState(false);

  return (
    <header className='heroo'>
     <div className='text'>
      LawAI
     </div>
    <nav>
        <ul>
            <li >
                   Connect with Expert
            </li>
            <li>
                Documentation
            </li>
            
            <li onClick={()=> SetCases(true)} >
             
                 Blogs
            </li>

            <li>
                Testimonies 
            </li>
        </ul>
    </nav>
   
      
</header>
  )
}

export default Header
