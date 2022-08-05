import React from "react";

const AddAUser = () => {
	return (
		<section className="form-container container">
			<h2>Add a User</h2>
			<form className="add-user-form">
				<section className="add-user-form-top-row">
					<div className="add-user-form-input-div">
						<label for="name">Name:</label>
						<input type="text" id="name" placeholder="Your Name" />
					</div>

					<div className="add-user-form-input-div">
						<label for="job-title">Job Title:</label>
						<input type="text" id="job-title" placeholder="Your Title" />
					</div>

					<div className="add-user-form-input-div">
						<label for="employer">Employer:</label>
						<input type="text" id="employer" placeholder="Your Employer" />
					</div>
				</section>

				<label for="movie">Favorite Movies:</label>
				<section className="add-user-form-movies-container">
					<input id="movie" placeholder=" Your Favorite Movie" />
					<input id="movie2" placeholder=" Your Second Favorite Movie" />
					<input id="movie3" placeholder=" Your Third Favorite Movie" />
				</section>

				<button>Add User</button>
			</form>
		</section>
	);
};

export default AddAUser;
