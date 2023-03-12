import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../../features/gameSlice';
import movieReducer from '../../features/movieSlice';
import showReducer from '../../features/showSlice';

export const store = configureStore({
	reducer: {
		game: gameReducer,
		movie: movieReducer,
		show: showReducer,
	},
});
