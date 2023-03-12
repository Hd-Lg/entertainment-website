import { Link } from 'react-router-dom';

import metro from './assets/metro.png';
import company from './assets/company_keep.jpg';
import avatar from './assets/avatar.jpg';

const App = () => {
	return (
		<main className='h-screen flex flex-col text-white'>
			<div className='flex flex-col space-y-5 items-center justify-center pt-44 pb-10 bg-slate-800 h-[40%] '>
				<h1 className='text-6xl'>Entertainment Website</h1>
				<p>
					Bored? Want something new to try? A game maybe, a new TV Show or a
					movie perhaps? <span>We got you!</span>
				</p>
				<div>
					{/* Add random page */}
					<Link to={'/home'}>Choose something at random! </Link>
				</div>
			</div>
			<div className='flex bg-slate-800 justify-around relative h-[60%]'>
				<Link
					to={'home/games'}
					className='w-1/3 flex justify-center h-[100%] relative'>
					<img src={metro} alt='' className='w-full h-full' />
					<span className='absolute text-3xl top-[50%] bg-black/80 w-full text-center py-4'>
						Video Games
					</span>
				</Link>
				<Link
					to={'home/shows'}
					className='w-1/3 flex justify-center h-[100%] relative'>
					<img src={company} alt='' className='w-full h-full ' />
					<span className='absolute text-3xl top-[50%] bg-black/80 w-full text-center py-4'>
						TV Shows
					</span>
				</Link>
				<Link
					to={'home/movies'}
					className='w-1/3 flex justify-center h-[100%] relative'>
					<img src={avatar} alt='' className='w-full h-full' />
					<span className='absolute text-3xl top-[50%] bg-black/80 w-full text-center py-4'>
						Movies
					</span>
				</Link>
				<Link
					to={'/home'}
					className='absolute bottom-10 border p-2 rounded-full hover:scale-105 active:scale-100 cursor-pointer'>
					Go to the homepage
				</Link>
			</div>
		</main>
	);
};

export default App;
