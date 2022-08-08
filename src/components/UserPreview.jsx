import React from "react";
import { Link } from "react-router-dom";

const UserPreview = props => {
	const { id, name, title, employer } = props.user;


	return (
		<article className="user-preview-card">
			<section className="user-preview-info">
				<h3>{name}</h3>

				<div className="user-preview-job">
					<h4>{employer}:</h4>
					<p>{title}</p>
				</div>
			</section>
			<Link to={`/users-${id}`}>
				<button>View {name.split(" ")[0]}</button>
			</Link>
		</article>
	);
};

export default UserPreview;
