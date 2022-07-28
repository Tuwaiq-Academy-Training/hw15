import { AiOutlineCompass, AiOutlineInstagram } from "react-icons/ai"
import { FiHeart, FiSearch } from "react-icons/fi"
import { BsPerson } from "react-icons/bs"




export default function Nav() {
  return (
    <div className="nav">
        <div className="insta">
        <AiOutlineInstagram className='icon' size={20} />

        <p>Instagram</p>
        </div>
        <div className="search">
        <FiSearch className='icon' size={20} />
        <p>Search</p>
        </div>
        <div className="pro">
        <FiHeart className='icon heart' size={20} />
        <AiOutlineCompass className='icon heart' size={20} />
        <BsPerson className='icon heart' size={20} />
        </div>
    </div>
  )
}
