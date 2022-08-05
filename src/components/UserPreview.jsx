import React from "react";

const UserPreview = props => {
	const { name, title, employer } = props.user;

	return (
		<article className="user-preview-card">
			<section className="user-preview-info">
				<h3>{name}</h3>

				<div className="user-preview-job">
					<h4>{employer}:</h4>
					<p>{title}</p>
				</div>
			</section>

			<button>View {name.split(" ")[0]}</button>
		</article>
	);
};

export default UserPreview;
