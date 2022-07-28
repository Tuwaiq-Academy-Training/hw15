import { AiOutlinePlusSquare } from "react-icons/ai";
import { FiSend } from "react-icons/fi";



export default function Profile() {
  return (
    <div className="box-profile">
        <div className="box-info-profile">

           <div className="picture">
                <img src='http://localhost:3000/logo192.png' alt="" />
           </div>

            <div className="info">
                <div className="info-flo">
                    <h1>verge</h1>
                    <div className="follow"> <p>Following</p> </div>
                    <AiOutlinePlusSquare className='icon' size={20} />
				    <FiSend className='icon' size={20} />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quasi fugiat ullam suscipit, soluta labore iste sequi maiores ratione commodi eum nesciunt sapiente consequatur. Velit voluptatibus debitis in excepturi necessitatibus!</p>
                <div>
                    <p>1,686 posts</p>
                    <p>897k followers</p>
                    <p>78 following</p>
                </div>
            </div>

        </div>
        <div className="box-picture">

            <div> <img src='http://localhost:3000/logo192.png' alt="" /></div>
            <div> <img src='http://localhost:3000/logo192.png' alt="" /></div>
            <div> <img src='http://localhost:3000/logo192.png' alt="" /></div>

        </div>
    </div>
  )
}
