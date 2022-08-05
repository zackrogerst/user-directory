import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Layout from "./components/Layout";

import NotFound from "./screens/NotFound";
import AllUsers from "./screens/AllUsers";
import AddAUser from "./screens/AddAUser";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate replace to="/users" />} />
				<Route path="/users" element={<AllUsers />} />
				<Route path="/add-user" element={<AddAUser />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
