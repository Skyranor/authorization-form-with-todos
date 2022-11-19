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
		settoken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchAuthUser.pending, (state, action) => {
			state.loading = Status.PENDING;
			state.errorMessage = '';
			console.log(state, action);
		});

		builder.addCase(fetchAuthUser.fulfilled, (state, action: PayloadAction<Token>) => {
			state.loading = Status.SUCCEEDED;
			state.token = action.payload.token;
			state.errorMessage = '';
			console.log(state, action);
		});

		builder.addCase(fetchAuthUser.rejected, (state, action: any) => {
			state.loading = Status.FAILED;
			state.errorMessage = action.payload.message;
			console.log(state, action);
		});
	},
});

export const { setEmail, setPassword, settoken } = authSlice.actions;

export default authSlice.reducer;
