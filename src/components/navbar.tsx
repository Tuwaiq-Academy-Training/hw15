import {  FiHeart } from 'react-icons/fi';
// import {home} from 'react-icons-kit/icomoon/home'
import{MdHomeFilled} from 'react-icons/md'
import{RiSendPlaneFill} from 'react-icons/ri'
import{CgAddR} from 'react-icons/cg'
import{TiCompass} from 'react-icons/ti'
// import{GoSearch} from 'react-icons/go'
import { Link } from 'react-router-dom';
import{AiFillCamera}from 'react-icons/ai';
// import { Navbar } from '../data';

// interface navProps {
// 	navbar: Navbar;
// }

export function Navb() {
return (
    <nav className='navbar'>
         <Link id='logo' to='/'>  <div className='logo'>
<AiFillCamera/>
<h2>t9aweer</h2>
</div></Link>

         <div className="navigation-search-container">
       
         <input className="search-field" type="text" placeholder="Search"/>
  
         </div>
         
 
         <div className="navigation-icons">
         <div className='iconss'>
         <Link id='homeIcon'  to='/'> < MdHomeFilled className='homeIcon' size={30}/></Link>
         <Link id='icon2' to='/direct/messages'>  <RiSendPlaneFill className='icon2' size={30}/></Link>
         <Link id='addicon' to='/add/post'><CgAddR className='addicon' size={30}/></Link>
         <Link id='compassicon' to=''> <TiCompass className='compassicon' size={30}/></Link>
         <Link id='likes' to='/likes'> <FiHeart className='hearticon' size={30}/></Link>
         <Link id='navAvatar' to='/profile'> <img className='navAvatar' src="/profileimage.png" alt="" /></Link>
             
            
            
            
             </div> 
            </div>
            </nav>
        
  );
 }
    