import React from 'react';
import {UilSearch} from '@iconscout/react-unicons';
import logoimg from '../../img/logo.png';
import '../../styles/logo.css';
const Logo = () => {
  return (
   <div className="LogoSearch">
       <img className='logoImg' src={logoimg} alt="" />
       <div className="Search">
           <input type="text" placeholder='Search' />
           <div className="s-icon">
               <UilSearch/>
           </div>
       </div>
   </div>
  )
}

export default Logo