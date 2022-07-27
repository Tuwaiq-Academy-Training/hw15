import { FiMoreHorizontal } from 'react-icons/fi';

export function Stories() {
	const storiesComps = [].map((story) => <Story name='User' avatar='gg' />);

	return <div className='stories'>{storiesComps}</div>;
}

export function Story(props: { name: string; avatar: string }) {
	return (
		<div className='stories'>
			<div className='stories-header'>
				<img src={props.avatar} alt='' />
			</div>
				{/* <p>{props.name}</p> */}
		</div>
	);
}
