interface IComment {
	id: string;
	content: string;
	ownerId: string;
}
export interface IStories{
    id:string;
 userAvatar:string;
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
export const stories: IStories []= [
    
]

export const posts: IPost[] = [
	{
		id: '1',
		username: 'bdq7',
		userAvatarUrl: 'https://i.pinimg.com/564x/c0/97/c1/c097c1852e76b233c7ea90c73bf0ad26.jpg',
		description: `Hey`,
		imageUrl:'https://i.pinimg.com/564x/80/55/9d/80559d9af4417a960eb28dc52c38c26f.jpg',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '2',
		username: 'bdq7',
		userAvatarUrl: 'https://i.pinimg.com/564x/c0/97/c1/c097c1852e76b233c7ea90c73bf0ad26.jpg',
		description: 'Hey ',
		imageUrl:'https://i.pinimg.com/564x/3d/fd/11/3dfd11f8b8f942fca803731d9637ba1e.jpg',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'bdq7',
		userAvatarUrl: 'https://i.pinimg.com/564x/c0/97/c1/c097c1852e76b233c7ea90c73bf0ad26.jpg',
		description: 'Hey',
		imageUrl:'https://i.pinimg.com/564x/cb/09/ea/cb09ea5bfb502cd86b6a547591752197.jpg',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];