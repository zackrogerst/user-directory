import React, { useState, useEffect } from "react";

let serial = 5;

const AddAUser = props => {
	const { users, setUsers } = props;

	const [newName, setNewName] = useState("");
	const [newLocation, setNewLocation] = useState("");
	const [newJob, setNewJob] = useState("");
	const [newEmployer, setNewEmployer] = useState("");
	const [newFav, setNewFav] = useState("");
	const [newFav2, setNewFav2] = useState("");
	const [newFav3, setNewFav3] = useState("");

	const [newUser, setNewUser] = useState({
		id: serial,
		name: newName,
		location: newLocation,
		job: newJob,
		employer: newEmployer,
		movies: [newFav, newFav2, newFav3]
	});

	useEffect(() => {
		setNewUser({
			id: serial,
			name: newName,
			location: newLocation,
			title: newJob,
			employer: newEmployer,
			movies: [newFav, newFav2, newFav3]
		});
	}, [users, newName, newLocation, newJob, newEmployer, newFav, newFav2, newFav3]);

	function sendUsers() {
		if (
			newName !== "" &&
			newLocation !== "" &&
			newJob !== "" &&
			newEmployer !== "" &&
			newFav !== "" &&
			newFav2 !== "" &&
			newFav3 !== ""
		) {
			setUsers([...users, newUser]);
			serial += 1
		}
	}

	return (
		<section className="form-container container">
			<h2>Add a User</h2>
			<form className="add-user-form" onSubmit={e => e.preventDefault}>
				<section className="add-user-form-top-row">
					<div className="add-user-form-input-div">
						<label>Name:</label>
						<input
							type="text"
							id="name"
							placeholder="Your Name"
							onChange={e => setNewName(e.target.value)}
							required
						/>
					</div>

					<div className="add-user-form-input-div">
						<label>From:</label>
						<input
							type="text"
							id="location"
							placeholder="Your Location"
							onChange={e => setNewLocation(e.target.value)}
							required
						/>
					</div>

					<div className="add-user-form-input-div">
						<label>Job Title:</label>
						<input
							type="text"
							id="job-title"
							placeholder="Your Title"
							onChange={e => setNewJob(e.target.value)}
							required
						/>
					</div>

					<div className="add-user-form-input-div">
						<label>Employer:</label>
						<input
							type="text"
							id="employer"
							placeholder="Your Employer"
							onChange={e => setNewEmployer(e.target.value)}
							required
						/>
					</div>
				</section>

				<label>Favorite Movies:</label>
				<section className="add-user-form-movies-container">
					<input
						id="movie"
						placeholder=" Your First Favorite Movie"
						onChange={e => setNewFav(e.target.value)}
						required
					/>

					<input
						id="movie2"
						placeholder=" Your Second Favorite Movie"
						onChange={e => setNewFav2(e.target.value)}
						required
					/>

					<input
						id="movie3"
						placeholder=" Your Third Favorite Movie"
						onChange={e => setNewFav3(e.target.value)}
						required
					/>
				</section>
			</form>
			<button onClick={sendUsers}>Add User</button>
		</section>
	);
};

export default AddAUser;
