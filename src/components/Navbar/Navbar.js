import React from 'react';
import './Navbar.css';

const Navbar = props => (
	<div>
		<nav className = "navbar p-4 fixed-top">
			<span className="tina-left">
				<img src="https://media.giphy.com/media/w6KZrFEa9Q0vpL7oQK/giphy.gif" alt="Tina Gif"/>	
			</span>		
			<span className="mx-auto">Score: {props.score}</span>
			<span className="tina-right">
				<img src="https://media.giphy.com/media/ds39ic1rpckvu/giphy.gif" alt="Tina Gif"/>
			</span>
		</nav>
	</div>
);

export default Navbar;