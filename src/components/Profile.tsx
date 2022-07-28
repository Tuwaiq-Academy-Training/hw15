
import {  FiSettings} from 'react-icons/fi';


export function Profile() {
	return (
        
<div className ="profile">

<div className="first-img">

<img className='img' src="https://pbs.twimg.com/profile_images/1441663301709090821/0P3EWw0r_400x400.jpg" alt="" width={150}/>

</div>
    

            <div>

    <div className ="start-profile-info">

        <h1 className='h2' >axendateam</h1>

        <button className='button' >Follow</button>
         <FiSettings  size={20} />

    </div>

    <div className ="header-ul">
        <ul>
            <li><span className="header-ul-info">79</span> posts</li>
            <li><span className ="header-ul-info">469</span> followers</li>
            <li><span className="header-ul-info">200</span> following</li>
        </ul>
       
    </div>

    <div className="profile-bio">

 <p> <b>Axenda</b>  is a team of passionate and ambitious young minds from all over the kingdom, united together to serve their community.
By providing a number of services and applications, Axenda helps students to lead more productive, organized, and a successful academic lives.


</p>

    </div>

</div>
</div>

	)
}
      







































