import React from "react";

import UserPreview from "../components/UserPreview";

const AllUsers = props => {
	const { users } = props;

	return (
		<section className="all-users-container container">
			{users.map((e, i) => (
				<UserPreview user={e} key={i} />
			))}
		</section>
	);
};

export default AllUsers;
