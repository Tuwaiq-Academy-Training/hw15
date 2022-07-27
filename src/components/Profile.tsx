
export function Profile() {
  return (
      <>
    <div className="container">

		<div className="profile">

			<div className="profile-image">

				<img id='a' src="https://pbs.twimg.com/profile_images/1441663301709090821/0P3EWw0r_400x400.jpg" alt="axenda logo" />

			</div>

			<div className="profile-user-settings">

				<h1 className="profile-user-name">axendateam</h1>

				<button className="btn profile-edit-btn">Edit Profile</button>

				<button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div className="profile-stats">

				<ul>
					<li><span className="profile-stat-count">70</span> posts</li>
					<li><span className="profile-stat-count">1.0M</span> followers</li>
					<li><span className="profile-stat-count">1</span> following</li>
				</ul>

			</div>

			<div className="profile-bio">

				<p><span className="profile-real-name">Axenda</span> فريق يطور برمجيات رهيبة تسهل مسيرة الطالب و تنظمها.‬
</p>

			</div>

		</div>
	

	</div>
    </>

  );
}