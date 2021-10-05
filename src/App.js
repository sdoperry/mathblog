import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<h1>DE-MYSTIFYING MATH for the MASSES</h1>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<About />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/sign-in">
						<SignIn />
					</Route>
					<Route path="/sign-out">
						<SignOut />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>ABOUT THIS SITE</h2>
		</div>
	);
}

function Register() {
	return (
		<div>
			<h2>CREATE AN ACCOUNT</h2>
		</div>
	);
}

function SignIn() {
	return (
		<div>
			<h2>ENTER YOUR ACCOUNT USERNAME AND PASSWORD</h2>
		</div>
	);
}

function SignOut() {
	return (
		<div>
			<h2>ARE YOU SURE YOU WANT TO SIGN OUT FOR NOW?</h2>
		</div>
	);
}

export default App;
