import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						MATH IS AWESOME!!
					</Link>
					<br />
					<Link to="/register" className="navbar-logo">
						CREATE A USER ACCOUNT
					</Link>
					<br />
					<Link to="/sign-in" className="navbar-logo">
						SIGN-IN
					</Link>
					<br />
					<Link to="/sign-out" className="navbar-logo">
						SIGN-OUT
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
