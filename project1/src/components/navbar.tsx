import { BiHomeAlt} from 'react-icons/bi';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import {IoLogoReddit  } from 'react-icons/io';

import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
export function Navbar() {
    return (
  
         <div className='ic'>
         < IoLogoReddit className='logo' size={40} />
         <input type="text"  placeholder="search"className='input'/>
         <div className='ico'>
    
         {/* home */}
         <Link to={'/'}>< BiHomeAlt className='ii' size={30} /></Link>
        {/* post */}
        <Link to={'/posts'}>  <MdOutlineAddToPhotos className='ii' size={30} /></Link>
        {/* profile */}
        <Link to={'/profile'}> <CgProfile className='ii' size={30} /></Link>
       {/* setting */}
       <Link to={'/setting'}>    <FiSettings className='ii' size={30} /></Link>
    



        </div>
        </div>
    );
  }






	
