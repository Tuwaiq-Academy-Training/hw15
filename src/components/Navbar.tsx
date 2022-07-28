import { Link } from 'react-router-dom';
import {  BiSearch} from 'react-icons/bi';
import {  HiHome} from 'react-icons/hi';
import {  FiSend,FiHeart} from 'react-icons/fi';
import {  GoDiffAdded} from 'react-icons/go';
import {  AiOutlineCompass} from 'react-icons/ai';
import {VscAccount}from 'react-icons/vsc';

export function Navbar() {
	return (
		<nav className="nav-ins">
			<Link to={'/'}>
				
			<img src="Instagram_logo.svg.png" alt="ins" className="img-instagram" />
			</Link>
			<BiSearch className="search2"/>
			<input  className="search" type="text"  placeholder="search"  />
            <div className="options">
			<Link to={'/home'}>
			<HiHome  className="HiHome"/>
			
			
			</Link>
			<Link to={'/send'}>
			 <FiSend  className="FiSend"/>

			</Link>
			<Link to={'/add_post'}>
			<GoDiffAdded className="GoDiffAdded"/>

			</Link>
			<Link to={'/find_pepole'}>
			<AiOutlineCompass className="AiOutlineCompass"/>

			</Link>
			<Link to={'/favorite'}>
			<FiHeart className="FiHeart"/>

			</Link>
			<Link to={'/personal'}>
			<VscAccount className="VscAccount"/>

			</Link>
			</div>
		</nav>
		
	);
}
