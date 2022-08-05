import React, { useState } from "react";

const IndividualUser = props => {
	// const [user, setUser] = useState({});
	const { users } = props;

	const { id, name, location, title, employer, movies } = users[0];

	return (
		<section className="user-card container">
			<article className="user-info-box">
				<section>
					<div className="user-name">
						<h2>{name}</h2>
					</div>
					<h3 className="user-location">
						From:
						<span> {location}</span>
					</h3>
					<h3 className="user-title">
						Job Title:
						<span> {title}</span>
					</h3>
					<h3 className="user-employer">
						Employer:
						<span> {employer}</span>
					</h3>
					<div className="user-movies">
						<h3>Favorite Movies:</h3>
						<ul>
							{movies.map((e, i) => (
								<li key={i + 1} className="user-movie-li">
									{i + 1}: {e}
								</li>
							))}
						</ul>
					</div>
				</section>

				<section className="user-id-box">
					<p className="user-id">
						ID: {id}/{users.length}
					</p>
				</section>
			</article>

			<article className="user-nav-bar">
				<h3 className="user-nav-prev">Previous</h3>

				<div className="user-nav-buttons">
					<button>Edit</button>
					<button>Delete</button>
					<button>New</button>
				</div>

				<h3 className="user-nav-next">Next</h3>
			</article>
		</section>
	);
};

export default IndividualUser;