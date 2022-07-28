import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { TbHistory } from "react-icons/tb";



export default function Footer() {
  return (
    <div className='foter'>
				<AiOutlineHome className='icon' size={20} />
				<FiSearch className='icon' size={20} />
				<MdOutlineVideoLibrary className='icon' size={20} />
				<AiOutlineShoppingCart className='icon' size={20} />
				<TbHistory className='icon' size={20} />
			</div>
  )
}
