// import { posts } from '../data';
import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import { FiCompass, FiHeart, FiUser } from 'react-icons/fi';


export function Navbar()
{
    return(
        <>
       <div className="nav-container">
            
        
        <Link to="/">
                    <img src={logo} alt="Insta" srcSet="" />
                    </Link>
        <input placeholder="Enter Post Title"/>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/profile">Profile</Link> */}
        {/* <Link to="/seting">Seting</Link> */}
        
        <div className="last-icon">
        <Link to="/seting">
        <FiCompass className='icon heart' size={20} />
        </Link>
        <FiHeart className='icon heart' size={20} />
        <Link to="/profile">
        <FiUser className='icon heart' size={20} />
        </Link>

            <Link to="new">
         <img src={camera} alt="Enviar" srcSet="" />
         </Link>  
        </div>

        {/* <Link to="new">
         <img src={camera} alt="Enviar" srcSet="" />
         </Link> */}

        </div>
        <br></br>
        <hr></hr>
        </>
    );
}
