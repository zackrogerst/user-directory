import React, { useEffect } from "react";

import UserPreview from "../components/UserPreview";

const AllUsers = props => {
	const { users } = props;

	let display;

	useEffect(() => {
		display = users.map((e, i) => <UserPreview user={e} key={i} />);
	}, [users]);

	return (
		<section className="all-users-container container">
			{users.map((e, i) => (
				<UserPreview user={e} key={i} />
			))}
		</section>
	);
};

export default AllUsers;
