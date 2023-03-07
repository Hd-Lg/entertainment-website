import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../components';

const LayoutPage = () => {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default LayoutPage;
