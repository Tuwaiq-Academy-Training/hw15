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
// export interface INav {

// }

export const posts: IPost[] = [
	{
		id: '1',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3000/logo512.png',
		description: `
		حياة الطلاب صارت اسهل مع خطة! شكرًا لكل رهيب ورهيبة شاركوا بتطويره💚
ثبتنا أسماء الرهيبين ووسائل للتواصل معهم في موقع خطة، شيكوا عليهم 😎
khotta.io`,
		imageUrl:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		date: new Date('2019-01-01'),
		likeCount: 0,
		comments: [],
	},
	/// post with my dog image
	{
		id: '2',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3000/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
	{
		id: '3',
		username: 'axendateam',
		userAvatarUrl: 'http://localhost:3000/logo512.png',
		description: 'This is my second post',
		imageUrl:
			'https://images.unsplash.com/photo-1574285013029-29296a71930e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
		date: new Date('2019-01-02'),
		likeCount: 0,
		comments: [],
	},
];




// interface IComment {
// 	id: string;
// 	content: string;
// 	ownerId: string;
// }
// export interface IPost{
//     id:string;
//     title:string;
//     description:string;
//     imageUrl:string;
//     date:Date;
//     likeCount:number;
//     ownerId:string;
// }
// export const posts: IPost[] =[
// {  id:'1',
//     title:'my first post',
//     description:'my first post',
//     imageUrl:'https://uploads.sitepoint.com/wp-content/uploads/2017/04/1493235373large_react_apps_A-01.png',
//     date: new Date('2022-09-09'),
//     likeCount:0,
//     ownerId:'123'},
//    {
//     id:'2',
//     title:'my 2 post',
//     description:'my first post',
//     imageUrl:'https://qph.cf2.quoracdn.net/main-qimg-298c11d054143f69f6292f583eceebcc-pjlq',
//     date: new Date('2022-09-09'),
//     likeCount:0,
//     ownerId:'123'},

//     {
//         id:'3',
//         title:'my 3 post',
//         description:'my first post',
//         imageUrl:'https://tse3.mm.bing.net/th?id=OIP.8Dt2FN-tu-TC6PiLadEuBAHaFj&pid=Api&P=0',
//         date: new Date('2022-09-09'),
//         likeCount:0,
//         ownerId:'123'},

//         {
//             id:'4',
//             title:'my 4 post',
//             description:'my first post',
//             imageUrl:'https://i.pinimg.com/originals/18/87/20/1887204ae9b2b370d919057696b9a24e.jpg',
//             date: new Date('2022-09-09'),
//             likeCount:0,
//             ownerId:'123'},
//             {
//                 id:'5',
//                 title:'my 5 post',
//                 description:'my first post',
//                 imageUrl:'https://tse4.mm.bing.net/th?id=OIP.xddyM5Z5llwe5nz0xAnhvAHaD_&pid=Api&P=0',
//                 date: new Date('2022-09-09'),
//                 likeCount:0,
//                 ownerId:'123'}
// ]