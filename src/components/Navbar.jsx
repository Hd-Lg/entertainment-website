import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-between'>
			<div>
				<Link to={'/home'}>
					<h1>VoD</h1>
				</Link>
			</div>
			<div className='flex space-x-2'>
				<Link to={'/home'}>Home</Link>
				<Link to={'/home/games'}>Video Games</Link>
				<Link to={'/home/shows'}>TV Shows</Link>
				<Link to={'/home/movies'}>Movies</Link>
			</div>
		</nav>
	);
};

export default Navbar;
