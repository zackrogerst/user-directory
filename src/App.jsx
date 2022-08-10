import { useState } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import AllUsers from "./screens/AllUsers";
import AddAUser from "./screens/AddAUser";
import IndividualUser from "./screens/IndividualUser";
import NotFound from "./screens/NotFound";
import EditUser from "./screens/EditUser";

import db from "./data/db";

function App() {
	const [users, setUsers] = useState(db);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate replace to="/users" />} />
				<Route path="/users" element={<AllUsers users={users} setUsers={setUsers} />} />
				<Route path="/users/:num" element={<IndividualUser users={users} setUsers={setUsers} />} />
				<Route path="/add-user" element={<AddAUser users={users} setUsers={setUsers} />} />
				<Route path="edit-user" element={<EditUser user={users[0]} />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
