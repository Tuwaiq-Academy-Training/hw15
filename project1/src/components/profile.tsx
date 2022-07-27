import { BsThreeDots } from 'react-icons/bs';
export function Userfile() {
	return (


<div className ="profile">
<div className="image">

				<img className='img' src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" width={150}/>

			</div>
            <div>

    <div className ="profile-user-follow">

        <h1 >tofee.b</h1>

        <button className='b1' >Follow</button>
         <select className='b'  name="select" id="" >
         </select>
         <BsThreeDots  size={20} />

    </div>

    <div className ="stats">
        <ul>
            <li><span className="profile-stat-count">100</span> posts</li>
            <li><span className ="profile-stat-count">180</span> followers</li>
            <li><span className="profile-stat-count">200</span> following</li>
        </ul>
       
    </div>

    <div className="profile-bio">

        <p>  Welcome to our new app 
t9aweer 😎🤙👊👩‍💻 t9aweer.gg@io </p>

    </div>

</div>
</div>

	)
}