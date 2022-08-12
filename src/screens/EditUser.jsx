import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = props => {
	const { users, setUsers } = props;
	let navigate = useNavigate();

	const param = +useParams().num;
	const index = users.findIndex(u => u.id === param);
	const { id, name, location, title, employer, movies } = users[index];

	const [editName, setEditName] = useState(name);
	const [editLocation, setEditLocation] = useState(location);
	const [editJob, setEditJob] = useState(title);
	const [editEmployer, setEditEmployer] = useState(employer);
	const [editFav, setEditFav] = useState(movies[0]);
	const [editFav2, setEditFav2] = useState(movies[1]);
	const [editFav3, setEditFav3] = useState(movies[2]);

	const [editUser, setEditUser] = useState({
		id: id,
		name: editName,
		location: editLocation,
		job: editJob,
		employer: editEmployer,
		movies: [editFav, editFav2, editFav3]
	});

	useEffect(() => {
		setEditUser({
			id: id,
			name: editName,
			location: editLocation,
			title: editJob,
			employer: editEmployer,
			movies: [editFav, editFav2, editFav3]
		});
	}, [editName, editLocation, editJob, editEmployer, editFav, editFav2, editFav3]);

	function buttonHandler() {
		if (
			editName !== "" &&
			editLocation !== "" &&
			editJob !== "" &&
			editEmployer !== "" &&
			editFav !== "" &&
			editFav2 !== "" &&
			editFav3 !== ""
		) {
			let tempUsers = users;
			tempUsers[index] = editUser;
			setUsers(tempUsers);
			navigate(`/users/${users[index].id}`, { replace: true });
		} else {
			alert("Please Fill Out All Fields");
		}
	}

	return (
		<article className="container edit-user-box">
			<section>
				<section className="edit-user-name">
					<h2>Full Name:</h2>
					<input value={editName} onChange={e => setEditName(e.target.value)} />
				</section>

				<h3 className="edit-user-location">
					From:
					<input value={editLocation} onChange={e => setEditLocation(e.target.value)} />
				</h3>

				<h3 className="edit-user-title">
					Job Title:
					<input value={editJob} onChange={e => setEditJob(e.target.value)} />
				</h3>

				<h3 className="edit-user-employer">
					Employer:
					<input value={editEmployer} onChange={e => setEditEmployer(e.target.value)} />
				</h3>
				<div>
					<h3>Favorite Movies:</h3>
					<div className="edit-user-movies">
						<input id="movie" value={editFav} required onChange={e => setEditFav(e.target.value)} />

						<input id="movie2" value={editFav2} required onChange={e => setEditFav2(e.target.value)} />

						<input id="movie3" value={editFav3} required onChange={e => setEditFav3(e.target.value)} />
					</div>
					<button
						onClick={() => {
							buttonHandler();
						}}
					>
						Edit User
					</button>
				</div>
			</section>
		</article>
	);
};

export default EditUser;
