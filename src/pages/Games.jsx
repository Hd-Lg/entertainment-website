import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchGames,
	getErrors,
	getGames,
	getLoading,
} from '../features/gameSlice';

const Games = () => {
	const dispatch = useDispatch();
	const stateLoading = useSelector(getLoading);
	const errorsGames = useSelector(getErrors);
	const games = useSelector(getGames);

	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	console.log('****************');
	console.log('** GAMES **');
	console.log(stateLoading);
	console.log(errorsGames);
	console.log(games);

	return (
		<div>
			{stateLoading ? (
				<div>
					<h2>Loading...</h2>
				</div>
			) : (
				<div>
					{games.map((game) => (
						<div key={game.id}>
							<h2>{game.name}</h2>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Games;
