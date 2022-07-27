import { Link } from 'react-router-dom';
import { FaBeer,  } from 'react-icons/fa';
import { FiCompass, FiHeart, FiMoreHorizontal, FiSettings, FiUser } from 'react-icons/fi';


export function Profile() {
	return (
        <div>
        <div className='main-profile'>
            <div>
            <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" className='pro-pic'></img>
            </div>
{/* separation */}
            <div className='column-profile-page'>
                <div className='first-column'>
                    <h2>samantha</h2>
                    <button className="btn-profile-edit-btn">Edit Profile</button>
                    <FiSettings className='icon heart' size={20} />
                    <FiMoreHorizontal className='icon heart' size={20} />
                </div>
                {/* seperate firsr & second culomn */}
                <div className='second-column'>
                    <p><b>198</b> posts</p>
                    <p><b>827</b> followers</p>
                    <p> <b>129</b> following</p>
                </div>
                {/* jjjjjj */}
                <div>
                    <p><b>Samantha</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets  </p>
                </div>
                <div>
                   <p className='lst-para'>followed by <b className='fol-name'>Yazeed</b>, <b className='fol-name'>saleh</b>, <b className='fol-name'>ahmed</b> + 36 more</p> 
                </div>
            </div>
        </div>
        </div>
        
		
	);
}
