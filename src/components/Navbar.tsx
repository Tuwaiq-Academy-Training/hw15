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


// import { FiHeart} from 'react-icons/fi';
// import { MdHomeFilled} from 'react-icons/md';
// import {RiSendPlaneFill } from 'react-icons/ri';
// import {CgAddR } from 'react-icons/cg';
// import {TiCompass } from 'react-icons/ti';
// import { Link } from 'react-router-dom';

// // import { INav } from '../data';


// export function Navbar() {
// 	return (<nav>
  //   <Link to={'posts'}>Posts</Link>
  // </nav>);
// 		<div className='navbar'>
// 			<div className='logo'>
// 				<h1>t9aweer</h1>
// 				</div>
//         <div className="navigation-search-container">
//         <input className="search-field" type="text" placeholder="Search"/>
//         <div className="search-container">
//       <div className="search-container-box">
//         </div>
// 		</div>
//         </div>
        

//         <div className="navigation-icons">
//         <div className='icons'>
//             <MdHomeFilled/>
//             <RiSendPlaneFill/>
//             <CgAddR/>
//             <TiCompass/>
//             <FiHeart/>
//             </div> 
//            </div>
//            </div>

           
       

// }