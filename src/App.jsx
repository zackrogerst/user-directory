import { Fragment } from "react";

// import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

// import Layout from "./components/Layout";
import Header from "./components/Header";

import AllUsers from "./screens/AllUsers";
import AddAUser from "./screens/AddAUser";
import IndividualUser from "./screens/IndividualUser";
import NotFound from "./screens/NotFound";

let users = [
	{
		id: 1,
		name: "John Smith",
		location: "Manhatten, New York",
		title: "Full-Stack Web Developer",
		employer: "Apple",
		movies: ["Tron", "Martian"]
	},
	{
		id: 2,
		name: "Jack Ripper",
		location: "Buffalo, New York",
		title: "Front End Web Developer",
		employer: "Apple",
		movies: ["Narnia", "SAO"]
	},
	{
		id: 3,
		name: "James May",
		location: "Queens, New York",
		title: "Back End Web Developer",
		employer: "Apple",
		movies: ["Blade Runner", "Gundam"]
	},
	{
		id: 4,
		name: "Joey Blast",
		location: "Brooklyn, New York",
		title: "Data Analyst",
		employer: "Apple",
		movies: ["Harry Potter", "JonTronShow"]
	}
];

function App() {
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
				<AllUsers users={users} />
				<AddAUser />
				<IndividualUser users={users} />
				<NotFound />
			</main>
		</Fragment>
	);
}

export default App;
