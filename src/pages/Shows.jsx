import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchShows,
	getErrors,
	getLoading,
	getShows,
} from '../features/showSlice';

const Shows = () => {
	const dispatch = useDispatch();
	const stateLoading = useSelector(getLoading);
	const errorsShows = useSelector(getErrors);
	const shows = useSelector(getShows);

	useEffect(() => {
		dispatch(fetchShows());
	}, []);
	console.log('****************');
	console.log('** Shows **');
	console.log(stateLoading);
	console.log(errorsShows);
	console.log(shows);
	return (
		<div>
			{stateLoading ? (
				<div>
					<h2>Loading...</h2>
				</div>
			) : (
				<div>
					{shows?.map((show) => (
						<div key={show.id}>
							<h2>{show.name}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Shows;
