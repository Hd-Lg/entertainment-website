import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='flex justify-between'>
			<div>
				<Link to={'/'}>
					<h1>VoD</h1>
				</Link>
			</div>
			<div className='flex space-x-2'>
				<Link to={'/'}>Home</Link>
				<Link to={'/discover'}>Discover</Link>
				<Link to={'/favorite'}>Favorite</Link>
				<Link to={'/profile'}>Profile</Link>
			</div>
		</nav>
	);
};

export default Navbar;
