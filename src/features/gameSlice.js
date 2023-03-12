import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GAME_URL = `https://api.rawg.io/api/games?key=${
	import.meta.env.VITE_RAWG_API
}`;

const initialState = {
	data: [],
	error: '',
	loading: false,
};

export const fetchGames = createAsyncThunk('game/fetchGames', async () => {
	try {
		const response = await fetch(GAME_URL);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
});

export const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchGames.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchGames.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchGames.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default gameSlice.reducer;
export const getGames = (state) => state.game.data;
export const getLoading = (state) => state.game.loading;
export const getErrors = (state) => state.game.error;
