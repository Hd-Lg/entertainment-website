import { Link } from 'react-router-dom';

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
					className='bg-red-500 w-1/3 flex justify-center h-[100%]'>
					Video Games
				</Link>
				<Link
					to={'home/shows'}
					className='bg-blue-500 w-1/3 flex justify-center h-[100%]'>
					TV Shows
				</Link>
				<Link
					to={'home/movies'}
					className=' bg-green-500 w-1/3 flex justify-center h-[100%]'>
					Movies
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
