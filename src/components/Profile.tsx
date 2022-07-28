// import{AiFillSetting} from 'react-icons/ai'
// import './styles/setting.css';

export function Profile(){
return (<><header>

    <div className="profile-container">

        <div className="profile">

            <div className="profile-image">

                <img src="http://localhost:3000/logo512.png" alt=""/>

                </div>

            <div className="profile-user-settings">

                <h1 className="profile-user-name">Axenda</h1>

                <button className="btn profile-edit-btn">Edit Profile</button>

                {/* <button onClick="" className="btn profile-settings-btn" aria-label="profile settings"><AiFillSetting/></button> */}

            </div>
            </div>

            <div className="profile-stats">

                <ul>
                    <li><span className="profile-stat-count">100</span> posts</li>
                    <li><span className="profile-stat-count">10M</span> followers</li>
                    <li><span className="profile-stat-count">1066</span> following</li>
                </ul>

            </div>

            <div className="profile-bio">

                <p><span className="profile-real-name"><p>Axenda | اكسندا </p> </span> 
                                    فريق يطور برمجيات رهيبة تسهل مسيرة الطالب و تنظمها
                                    </p>          
                                <div>   
                              <a id="lik" href="https://khotta.bio.link/">{'\n'}khotta.bio.link</a>
                                </div> 

            </div>

       


    </div>
    
<hr id="hr"></hr>
    </header>


    {/* <div className="sidebar">
  <a className="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
<div className="content">
  ..
</div> */}
    
    </>)}