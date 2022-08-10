import React from "react";

const EditUser = props => {
	const { name, location, title, employer, movies } = props.user;

	return (
		<article className="container edit-user-box">
			<section>
				<section className="edit-user-name">
					<h2>Full Name:</h2>
					<input value={name} />
				</section>

				<h3 className="edit-user-location">
					From:
					<input value={location} />
				</h3>

				<h3 className="edit-user-title">
					Job Title:
					<input value={title} />
				</h3>

				<h3 className="edit-user-employer">
					Employer:
					<input value={employer} />
				</h3>
				<div>
					<h3>Favorite Movies:</h3>
					<div className="edit-user-movies">
						<input id="movie" value={movies[0]} required />

						<input id="movie2" value={movies[1]} required />

						<input id="movie3" value={movies[2]} required />
					</div>
				</div>
			</section>
		</article>
	);
};

export default EditUser;
