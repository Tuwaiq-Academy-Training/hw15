interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IPost {
	id: string;
	description: string;
	imageUrl: string;
	date: Date;
	likeCount: number;
	comments: IComment[];
	username: string;
	userAvatarUrl: string;
}


export const posts: IPost[] = [
	{
		id: '1',
		username: 'momo',
		userAvatarUrl: '',
		description: '#flower #flowers',
		imageUrl:'https://images.unsplash.com/photo-1658620258823-9d78c7b14f26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2022-07-26'),
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image

	{
		id: '2',
		username: 'sara',
		userAvatarUrl: '',
		description: `my trip ☺️ 
		#trip #dream_come_true`,
		imageUrl:'https://images.unsplash.com/photo-1658730068465-8e5f2588a2aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60',
		date: new Date('2022-07-26'),
		likeCount: 0,
		comments: [],
	},
];



