import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IPost } from '../data';

interface PostProps {
	post: IPost;
}

export function Post({ post }: PostProps) {
	return (
		<>
		<div className='post'>
			<div className='up'>
				<AiOutlinePlusSquare className='icon' size={20} />
				<FiSend className='icon' size={20} />
			</div>
			
			<div className='header'>
				<img src={post.userAvatarUrl} alt='' />
				<h2>{post.username}</h2>
				<div className='spacer'></div>
				<FiMoreHorizontal />
			</div>
			<img src={post.imageUrl} alt='' />
			<div className='footer'>
				<div className='icons'>
					<FiHeart className='icon heart' size={40} />
					<FiMessageCircle className='icon' size={40} />
					<FiSend className='icon' size={40} />
					<div className='spacer'></div>
					<FiBookmark className='icon' size={40} />
				</div>
				<p className='description'>{post.description}</p>
			</div>

		</div>
			</>
	);
}
