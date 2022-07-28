import { MdHomeFilled} from 'react-icons/md';
import { Link } from 'react-router-dom';
import {CgAddR } from 'react-icons/cg';
import {CgProfile } from 'react-icons/cg';
import {RiSendPlaneFill } from 'react-icons/ri';
import {TiCompass } from 'react-icons/ti';
import {FiHeart } from 'react-icons/fi';

export function Navbar() {
	return (

		<nav> 
      			<Link id='logo' to={'/posts'}>T9aweer</Link>

       <input   className="search-field" type="text" placeholder="Search"/>  
         
             
	       <div id='icons'>        
			<Link id="icon1" to={'/posts'}><MdHomeFilled/></Link>
      <RiSendPlaneFill/>
      <TiCompass/>
      <FiHeart/>
			<Link id="icon2" to={'/addPost'}><CgAddR/></Link>
			<Link id="icon3" to={'/profile'}><CgProfile/></Link>

     </div> 
		</nav>
	);
}


