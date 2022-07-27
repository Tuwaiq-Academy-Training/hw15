import { FiHeart, FiMenu, FiPlusSquare, FiSend } from 'react-icons/fi';
import { MdHomeFilled } from 'react-icons/md';
import { ImCompass2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

export function Nav(){
    return <nav>
         <h2>Instagram</h2>
        <input type="text" placeholder="Search" />
        <FiMenu className='menu' />
        <div className='navIcons'>
		<Link to={'/'}><MdHomeFilled size={25} /></Link>
        <FiSend size={25} />
        <FiPlusSquare size={25} /> 
        <ImCompass2 size={25} />
        <FiHeart size={25} />
        <Link to={'/profile'}><img src='http://localhost:3000/logo512.png' alt='' className='profileIcon' /></Link>

        
        </div>

       
    </nav>
}