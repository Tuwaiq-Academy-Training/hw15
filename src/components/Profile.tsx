import {IoIosSettings} from 'react-icons/io';
import { Link } from 'react-router-dom';


export function Profile() {

	return (

        <div>
          <header>

<div className="container">

    <div className="profile">

        <div className="profile-image">

            <img src="https://images.unsplash.com/photo-1658937364065-60f3f6818724?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" height={152} width={152} alt=""/>

        </div>

        <div className="profile-user-settings">

            <h1 className="profile-user-name">w9oof</h1>

            <button className="btn profile-edit-btn">Edit Profile</button>
             <Link to={'/sitting'}>  <button className="btn profile-settings-btn" aria-label="profile settings"><IoIosSettings size={25}/></button></Link>
          

        </div>

        <div className="profile-stats">

            <ul>
                <li><span className="profile-stat-count">100</span> posts</li>
                <li><span className="profile-stat-count">500</span> followers</li>
                <li><span className="profile-stat-count">30</span> following</li>
            </ul>

        </div>

        <div className="profile-bio">

            <p><span className="profile-real-name">Wasayf</span> programming 💻 ☕</p>

        </div>

    </div>
   

</div>


</header>

<main>

<div className="container">

    <div className="gallery">

        <div className="gallery-item">

            <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className="gallery-image" alt=""/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item" >

            <img src="https://images.unsplash.com/photo-1658867853996-5e82123f362a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="gallery-image" alt=""/>

            <div className="gallery-item-info">

                <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 89</li>
                    <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 5</li>
                </ul>

            </div>

        </div>

        <div className="gallery-item">

            <img src="https://images.unsplash.com/photo-1658890636419-c156eb3f689c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="gallery-image" alt=""/>

            <div className="gallery-item-type">

                <span className="visually-hidden">Gallery</span><i className="fas fa-clone" aria-hidden="true"></i>

            </div>


        </div>

    </div>
  

    <div className="loader"></div>

</div>

</main>

        </div>
    );

}