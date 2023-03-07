import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
};

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers: (builder) => {},
});

export default dataSlice.reducer;
