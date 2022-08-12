import React from "react";

import UserPreview from "../components/UserPreview";

const AllUsers = props => {
	const { users } = props;

	return (
		<section className="all-users-container container">
			{users.length > 0 ? (
				users.map((e, i) => <UserPreview user={e} key={i} />)
			) : (
				<h2 className="light-text">No Users!</h2>
			)}
		</section>
	);
};

export default AllUsers;
