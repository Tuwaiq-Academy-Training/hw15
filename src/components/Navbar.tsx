import { Link } from 'react-router-dom';
import { FaBeer,  } from 'react-icons/fa';
import { FiCompass, FiHeart, FiInstagram, FiUser } from 'react-icons/fi';


export function Navbar() {
	return (
		<nav className='navBar'>
			<div>
			
			<div className='inst-logo'>
			<Link className='logo' to={'/'}>HOME</Link>
			<FiInstagram className='icon heart' size={25} />
			<Link className='logo' to={'/posts'}>instagram</Link>
			</div>

			</div>
			<input className='navigation-search-container' type="text" placeholder='search..' />
			<div className='right-nav'>
			<FiCompass className='icon heart' size={25} />
			<FiHeart className='icon heart' size={25} />
			<Link to={'/profile'}><FiUser className='a' size={25} /></Link>
			</div>

			
		</nav>
		
	);
}
