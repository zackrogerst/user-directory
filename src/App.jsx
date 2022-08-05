import { Fragment, useState } from "react";

// import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

// import Layout from "./components/Layout";
import Header from "./components/Header";

import AllUsers from "./screens/AllUsers";
import AddAUser from "./screens/AddAUser";
import IndividualUser from "./screens/IndividualUser";
import NotFound from "./screens/NotFound";

import db from "./data/db";

function App() {
	const [usersList, setUsersList] = useState(db);
	return (
		// <Layout>
		// 	<Routes>
		// 		<Route path="/" element={<Navigate replace to="/users" />} />
		// 		<Route path="/users" element={<AllUsers />} />
		// 		<Route path="/users:id" element={<IndividualUser users={users} />} />
		// 		<Route path="/add-user" element={<AddAUser />} />
		// 		<Route path="*" element={<NotFound />} />
		// 	</Routes>
		// </Layout>
		<Fragment>
			<Header />
			<main>
				<AllUsers users={usersList} setUsers={setUsersList} />
				<AddAUser users={usersList} setUsers={setUsersList} />
				<IndividualUser users={usersList} setUsers={setUsersList} />
				<NotFound />
			</main>
		</Fragment>
	);
}

export default App;
