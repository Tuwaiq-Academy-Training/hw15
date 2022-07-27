import { FiSettings } from "react-icons/fi";

export function Profile(){
    return <>
    <div className="profile">
    <img src='http://localhost:3000/logo512.png' alt=''/>
     <div className="info">
     <div className="first-info">
        <p>tsaweer</p>
        <button>edit profile</button>
        <FiSettings />
    </div>
    <div className="second-info">
    <p>3 posts</p>
    <p>500K followers</p>
    <p>1 following</p>
    </div>
     </div>
    </div>
    
    </>
}