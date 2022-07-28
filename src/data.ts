
 export interface Ipost{
    id: string;
    userAvatarUrl:string;
    username:string;
    imageUrl:string;
    description:string;
    date:Date; 
    likeCount:number;
    ownerId:number;
   }
   
    export const posts:Ipost[] = [{
    id: '123',
    userAvatarUrl:'https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA',
    username:'about me',
    imageUrl:'https://images.unsplash.com/photo-1658715493106-026578f35262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60',
    description:'.......',
    date: new Date(2022-7-25),
    likeCount:2,
    ownerId:3
  },
  {
    id: '456',
    userAvatarUrl:'https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA',
    username:'about me',
    imageUrl:'https://images.unsplash.com/photo-1658607646170-9fa2f43517f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    description:'.......',
    date: new Date(2022-7-25),
    likeCount:3,
    ownerId:23
  },{
    id: '876',
    userAvatarUrl:'https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA',
    username:'about me',
    imageUrl:'https://images.unsplash.com/photo-1658507165834-a19bc7576cf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    description:'.......',
    date: new Date(2022-7-25),
    likeCount:7,
    ownerId:234
  }
  ,{
    id: '987',
    userAvatarUrl:'https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA',
    username:'about me',
    imageUrl:'https://images.unsplash.com/photo-1658728942300-1e1bf292b7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    description:'.......',
    date: new Date(2022-7-25),
    likeCount:5,
    ownerId:7654
  },{
    id: '133',
    userAvatarUrl:'https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA',
    username:'about me',
    imageUrl:'https://images.unsplash.com/photo-1658741446147-d9e22eea8730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    description:'.......',
    date: new Date(2022-7-25),
    likeCount:2,
    ownerId:4443
  }
]