import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
	import.meta.env.VITE_TMDB_API
}&language=en-US&page=1`;

const initialState = {
	data: [],
	error: '',
	loading: false,
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
	try {
		const response = await fetch(MOVIE_URL);
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
	}
});

export const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.loading = false;
				state.data.push(action.payload);
			})
			.addCase(fetchMovies.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default movieSlice.reducer;
export const getMovies = (state) => state.movie.data;
export const getLoading = (state) => state.movie.loading;
export const getErrors = (state) => state.movie.error;
