import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	displayName: '',
	favorites: [],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
});

export default userSlice.reducer;
