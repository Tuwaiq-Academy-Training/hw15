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
export interface Navbar {
avatarur:string
}



export const posts: IPost[] = [
	{
		id: '1',
		username: 'DaadAlsaif',
		userAvatarUrl: 'http://localhost:3000/profileimage.png',
		description: `hi`,
		imageUrl:
			'https://images.unsplash.com/photo-1544038659-12337883d216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},

	{
		id: '2',
		username: 'DaadAlsaif',
		userAvatarUrl: 'http://localhost:3000/profileimage.png',
		description: ' ❤️ ❤️',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'DaadAlsaif',
		userAvatarUrl: 'http://localhost:3000/profileimage.png',
		description: ' ❤️ ❤️',
		imageUrl:
			'http://localhost:3000/mayar.jpg',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];
