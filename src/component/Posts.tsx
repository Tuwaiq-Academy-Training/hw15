import { posts } from '../data';
import { Navbar } from './Navbar';
import { Post } from './Post';
// import { stories } from '../data';


export function Posts() {
	const postsDivs = posts.map((post) => <Post post={post} />);

	return (<>
		<Navbar/>
		<div className='posts' id=''>
			{postsDivs}
		</div>
		</>
	);
}