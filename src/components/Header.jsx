import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav className="nav-container">
				<ul className="nav-ul">
					<li>
						<NavLink to="/users" className="nav-link">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/add-user" className="nav-link">
							Add a User
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
