import React from "react";
import {  FiMoreHorizontal ,FiSettings} from "react-icons/fi";
import { Navbar } from "./Navbar";

export function ProfilePage()
{
    return(
        <>
        <Navbar/>
        <div>
        <div className='main-profile'>
            <div>
            <img src="https://i.pinimg.com/564x/c0/97/c1/c097c1852e76b233c7ea90c73bf0ad26.jpg" alt="" className='pro-pic'></img>
            </div>
            <div className='column-profile-page'>
                <div className='first-column'>
                    <h2>bdq7</h2>
                    <button className="btn-profile-edit-btn">Edit Profile</button>
                    <FiSettings className='icon heart' size={20} />
                    <FiMoreHorizontal className='icon heart' size={20} />
                </div>
                <div className='second-column'>
                    <p><b>3</b> posts</p>
                    <p><b>473</b> followers</p>
                    <p> <b>1,062</b> following</p>
                </div>
                <div>
                    <h4>✨ Lamis Abdullah ✨</h4>
                </div>
            </div>
        </div>
        

            <div className="allphoto">
                {/* <h1>all photo</h1> */}
                <img className="photo-one" src="https://i.pinimg.com/564x/80/55/9d/80559d9af4417a960eb28dc52c38c26f.jpg" alt="" width="300px" height="400px"/>
                <img className="photo-two" src="https://i.pinimg.com/564x/3d/fd/11/3dfd11f8b8f942fca803731d9637ba1e.jpg" alt="" width="300px" height="400px"/>
                <img className="photo-trhee" src="https://i.pinimg.com/564x/cb/09/ea/cb09ea5bfb502cd86b6a547591752197.jpg" alt="" width="300px" height="400px"/>

            </div>
           

        </div>
        </>
    )
}