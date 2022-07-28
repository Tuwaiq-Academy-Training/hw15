import Footer from '../components/Footer';
import { Layout } from '../components/Layout';
import { Posts } from '../components/Posts';
import Story from '../components/Story';

export function PostsPage() {
	return (
		<Layout>
            <>
            <Story />
			<Posts />
            <Footer />
            </>
		</Layout>
	);
}