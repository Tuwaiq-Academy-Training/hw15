import { Link } from 'react-router-dom';
import { FiHeart} from 'react-icons/fi';
import { MdHomeFilled} from 'react-icons/md';
import { AiFillSetting} from 'react-icons/ai';

import {CgAddR } from 'react-icons/cg';
import {TiCompass } from 'react-icons/ti';

export function Navbar() {
	return (
		// <nav>
		// 	<Link to={'/'}>Home</Link>
		// 	<Link to={'/posts'}>Posts</Link>
		// 	<Link to={'/profile'}>Profile</Link>
		// </nav>
  <div className='navbar'>
  <div className='logo'>
   <h4>Instagram</h4>
   </div>
	   <div className="navigation-search-container">
	   <input className="_aawc" type="text" placeholder="Search"/>
	   <div className="search-container">
	 <div className="search-container-box">
	   </div>
 </div>
	   </div>
	   
	   <div className="navigation-icons">
	   <div className='icons'>
	   <Link to={'/'}> <MdHomeFilled/></Link> 
	   <Link to={'/'}> <AiFillSetting/></Link> 
		   <CgAddR/>
		   <TiCompass/>
		   <FiHeart/>
		   <Link to={'/profile'}> <img className='img-nav' src="https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA" alt="" /></Link>
		   
		   </div> 
		  </div>
		  </div>
	  

	);
}
