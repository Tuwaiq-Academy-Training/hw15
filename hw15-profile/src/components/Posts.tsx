import { posts } from '../data';
import { Post } from "./post";

export function Posts() {
	const postsDivs = posts.map((post) => <Post post={post} />);

	return (
		<div className='posts' id=''>
			{postsDivs}
		</div>
	);
}
