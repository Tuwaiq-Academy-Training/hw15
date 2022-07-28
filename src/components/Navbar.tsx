import{MdHomeFilled} from 'react-icons/md';
import{BsMessenger} from 'react-icons/bs';
import{FiPlusSquare} from 'react-icons/fi';
import{BiCompass} from 'react-icons/bi';
import{AiOutlineHeart} from 'react-icons/ai';
import { Link } from 'react-router-dom';

export function Navbar() {
	return (
    <div className="grid main-header" id="head">
    <div className="flex-container header-container">
      <span className="logo logo-nav header-item">
        Instagram
      </span>
      
      <div className="header-item searchbar ">
        <label>
          <div className="flex-container">
            <div className="search-icon-container">
              <svg className="search-nav-icon"viewBox="0 0 512 512" width="100">
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
        </svg></div>
  
                <input id="searchbar" type="text" className="searchbar-input" placeholder="Search..."/>
            </div>
          </label>
      </div>
    <nav className="header-item main-nav">
      <ul className="navbar flex-container">
        <li className="navbar-item">
        <Link to = {'/'}><MdHomeFilled size={22}/></Link>
        </li>
        <li  className="navbar-item">
          <BsMessenger size={22}/>
        </li>
        <li  className="navbar-item">
          <FiPlusSquare size={22}/>
        </li>
        <li className="navbar-item">
          <BiCompass size={22}/>
        </li>
        <li className="navbar-item">
          <AiOutlineHeart size={22}/>
        </li>
        <li className="navbar-item no-hover">
          <Link to={'/profile'}> <img src="https://images.unsplash.com/photo-1658937364065-60f3f6818724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/></Link>
        </li>
      </ul> 
    </nav>
    </div>
  </div>

	);
}
