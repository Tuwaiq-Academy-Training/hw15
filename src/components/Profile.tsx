import React from "react";
import { FiChevronDown, FiMoreHorizontal } from "react-icons/fi";
import { Navbar } from "./Navbar";

export function ProfilePage()
{
    return(
        <>
        <Navbar/>
        {/* <h1>helo profile</h1> */}
        <div>
           
            
            <div style={{ maxWidth: '2070px', margin: '0px auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey' }}>
                <div>
                   
                    <img className="profilephoto" src="https://images.unsplash.com/photo-1656955775222-5c0fbbd7a121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg5NjczNTY&ixlib=rb-1.2.1&q=80&w=1080" alt="" width="250px" height="250px"/>
                </div>
                <div>
                    <div className="inst-name">
                        <h1 className="title">Travil Time </h1>
                        <button type="button" className="btn">Following</button>
                        {/* <Link to="/profile"> */}
                         <FiChevronDown className='icon heart' size={20} />
                          {/* </Link> */}
                          <FiMoreHorizontal className='icon heart' size={20} />
                    </div>
                    <div className="folloingbox">
                    
                        


                    </div>
                   
                    <div style={{ display: "flex", justifyContent: "space-between", width: '108%',gap:'20px' }}>
                        <h5>40 Posts</h5>
                        <h5>41 Followers</h5>
                        <h5>20 Following</h5>
                    </div>
                    <div className="profilehello">
                        <h4>welcom to my instagram </h4>
                    </div>
                </div>
            </div>
            </div>

            <div className="allphoto">
                {/* <h1>all photo</h1> */}
                <img className="photo-one" src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" width="300px" height="300px"/>
                <img className="photo-two" src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" width="300px" height="300px"/>
                <img className="photo-trhee" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" width="300px" height="300px"/>

            </div>
           

        </div>
        </>
    )
}