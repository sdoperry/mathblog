import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<Link to="/register">
					<button name="create">CREATE A USER ACCOUNT</button>
				</Link>
				<Link to="/sign-in">
					<button name="signin">SIGN-IN</button>
				</Link>
				<Link to="/sign-out">
					<button name="signout">SIGN-OUT</button>
				</Link>
				<Link to="/">
					<button name="about">WHAT'S THIS SITE ALL ABOUT?</button>
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
