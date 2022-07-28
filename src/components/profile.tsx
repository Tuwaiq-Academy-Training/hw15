


export function Profile() {
    return (
        <header>

	<div className="container">

		<div className="profile">

			<div className="profile-image">
                 <img src="https://www.bing.com/images/blob?bcid=qEjctsLda3UEVA" alt="" />
				{/* <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt=""> */}

			</div>

			<div className="profile-user-settings">

				<h1 className="profile-user-name">ran.mq</h1>

				<button className="btn profile-edit-btn">Edit Profile</button>

				<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div className="profile-stats">

				<ul>
					<li><span className="profile-stat-count">0</span> posts</li>
					<li><span className="profile-stat-count">102</span> followers</li>
					<li><span className="profile-stat-count">1288</span> following</li>
				</ul>

			</div>

			<div className="profile-bio">

				<p><span className="profile-real-name">رنا القحطاني </span> Full-stack devloper at @TwuwaigAcademy</p>

			</div>

		</div>
	

	</div>
<hr />

</header>

    )}