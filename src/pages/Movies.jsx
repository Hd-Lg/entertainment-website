import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchMovies,
	getErrors,
	getLoading,
	getMovies,
} from '../features/movieSlice';

const Movies = () => {
	const dispatch = useDispatch();
	const stateLoading = useSelector(getLoading);
	const errorsMovies = useSelector(getErrors);
	const movies = useSelector(getMovies);

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	console.log('****************');
	console.log('** MOVIES **');
	console.log(stateLoading);
	console.log(errorsMovies);
	console.log(movies[0]);
	return (
		<div>
			{stateLoading ? (
				<div>
					<h2>Loading...</h2>
				</div>
			) : (
				<div>
					{movies[0]?.map((movie) => (
						<div key={movie.id}>
							<h2>{movie.original_title}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Movies;
