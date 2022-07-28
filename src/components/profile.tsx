import{AiFillSetting} from 'react-icons/ai'
import{MdGridOn,MdOutlineSlowMotionVideo}from 'react-icons/md'
import {BsBookmark}from 'react-icons/bs'
import{TbBuildingCottage}from 'react-icons/tb'
export function Profile(){
return (<><header>

    <div className="profile-container">

        <div className="profile">

            <div className="profile-image">

                <img src="/profileimage.png" alt=""/>

                </div>

            <div className="profile-user-settings">

                <h1 className="profile-user-name">Daad_alsaif</h1>

                <button className="btn profile-edit-btn">Edit Profile</button>

                <button className="btn profile-settings-btn" aria-label="profile settings"><AiFillSetting/></button>

            </div>

            <div className="profile-stats">

                <ul>
                    <li><span className="profile-stat-count">100</span> posts</li>
                    <li><span className="profile-stat-count">200</span> followers</li>
                    <li><span className="profile-stat-count">409</span> following</li>
                </ul>

            </div>

            <div className="profile-bio">

                <p><span className="profile-real-name">دعد السيف <br /></span> Riyadh-Majmaah 🌴☀️🐪</p>

            </div>

        </div>
        {/* < />!-- End of profile section --> */}

    </div>
 
    </header>
   
   <section className="tabs">
       
        <div className='buttons'><div className="tabs_btn">
            
    <MdGridOn size={30}/>
    </div>
    <div className="tabs__btn">
    <MdOutlineSlowMotionVideo size={30}/>
    </div>
    <div className="tabs__btn">
    <BsBookmark size={30}/>
    </div>
    <div className="tabs__btn">
    <TbBuildingCottage size={30}/>
    </div></div>
    
  </section>
  {/* gallery */}
  



    </>)}


