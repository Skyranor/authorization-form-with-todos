import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';
import { Token } from '../../../models/Token';
import { fetchAuthUser } from './asyncActions';
import { AuthState } from './types';

export const initialState: AuthState = {
	token: '',
	user: {} as IUser,
	loading: Status.IDLE,
	errorMessage: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setEmail(state, action: PayloadAction<string>) {
			state.user.email = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.user.password = action.payload;
		},
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		setErrorMessage(state, action: PayloadAction<string>) {
			state.errorMessage = '';
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchAuthUser.pending, (state, action) => {
			state.loading = Status.PENDING;
			state.errorMessage = '';
		});

		builder.addCase(fetchAuthUser.fulfilled, (state, action: PayloadAction<Token>) => {
			state.loading = Status.SUCCEEDED;
			state.token = action.payload.token;
			state.errorMessage = '';
		});

		builder.addCase(fetchAuthUser.rejected, (state, action: any) => {
			state.loading = Status.FAILED;
			state.errorMessage = action.payload.message;
		});
	},
});

export const { setEmail, setPassword, setToken, setErrorMessage } = authSlice.actions;

export default authSlice.reducer;
