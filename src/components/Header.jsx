import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<NavLink to="/users">Home</NavLink>
					</li>
					<li>
						<NavLink to="/add-user">Add a User</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
