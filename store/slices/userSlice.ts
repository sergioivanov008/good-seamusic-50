import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface MainState {
	id: string;
}

const initialState: MainState = {
	id: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setId(state, action: PayloadAction<string>) {
			state.id = action.payload;
		},
	},
});

export const { reducer: userReducer, actions: mainActions } = userSlice;

export const mainSelector = (state: RootState) => state.user;
