import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProfileTabType } from '@/widgets/types';
import { PROFILE_TEMP_DATA } from '@/shared/constants/constants';

interface MainState {
	tab: ProfileTabType;
}

const initialState: MainState = {
	tab: PROFILE_TEMP_DATA.navigationLink[0],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setTab(state, action: PayloadAction<ProfileTabType>) {
			state.tab = action.payload;
		},
	},
});

export const { reducer: userReducer, actions: userActions } = userSlice;

export const userSelector = (state: RootState) => state.user;
