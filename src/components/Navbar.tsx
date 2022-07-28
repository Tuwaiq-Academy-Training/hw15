import { Link } from 'react-router-dom';

import { BsFillSuitHeartFill,BsInstagram ,BsFillGearFill,BsFillPersonFill} from "react-icons/bs";




export function Navbar() {
	return (
		<nav className='topnav'>
			<div>
  
			<div className='first-logo'>
				 {/* home */}
			<Link  className='logo' to={'/'}>Home</Link>
			<BsInstagram className='iconInstagram' size={24}/>
			<Link  className='logo' to={'/posts'}>Instagram</Link>
			</div>

			</div>
			       {/* search */}
			<input className='search' type="text" placeholder='search here ..' />
			<div className='sec-nav'>
			<Link to={'/setting'}><BsFillGearFill  className='a' size={24} /></Link>
			
			<BsFillSuitHeartFill className='iconFill ' size={24} />
			
			<Link to={'/profile'}><BsFillPersonFill className='a' size={24} /></Link>
			

			{/* <Link to={'/profile'}>Profile</Link>
			<input type="text" placeholder="Search.."></input> */}
	
	</div>
		</nav>
	);
}

 
