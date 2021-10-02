import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<h1>DE-MYSTIFYING MATH for the MASSES</h1>
				<Navbar />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</Router>
		</>
	);
}

export default App;
