import { Link } from 'react-router-dom';
import { FiBookmark, FiCompass, FiHeart, FiInstagram } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

export function Navbar() {
	return (
		<nav>
			
    <div className="app">
      <div className="app__header">
        <div className="app__headerWrapper">
          <FiInstagram/>
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <input className="text__button" placeholder='search'></input>
          <div className="app__headerButtons">
            
         <FiCompass/>
         <FiHeart/>
         <CgProfile/>
           
          </div>
        </div>
      </div>
    </div>
 

		</nav>
	);
}
