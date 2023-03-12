import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SHOW_URL = ` https://api.themoviedb.org/3/tv/popular?api_key=${
	import.meta.env.VITE_TMDB_API
}&language=en-US&page=1`;

const initialState = {
	data: [],
	error: '',
	loading: false,
};

export const fetchShows = createAsyncThunk('show/fetchShows', async () => {
	try {
		const response = await fetch(SHOW_URL);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
});

export const showSlice = createSlice({
	name: 'show',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchShows.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchShows.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			})
			.addCase(fetchShows.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default showSlice.reducer;
export const getShows = (state) => state.show.data;
export const getLoading = (state) => state.show.loading;
export const getErrors = (state) => state.show.error;
