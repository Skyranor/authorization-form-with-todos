import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';
import { fetchAuthUser } from './asyncActions';
import { AuthState } from './types';

export const initialState: AuthState = {
	authToken: '',
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
		setAuthToken(state, action: PayloadAction<string>) {
			state.authToken = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(fetchAuthUser.pending, (state, action) => {
			state.loading = Status.PENDING;
			state.errorMessage = '';
			console.log(state, action);
		});

		builder.addCase(
			fetchAuthUser.fulfilled,
			(state, action: PayloadAction<{ token: string }>) => {
				state.loading = Status.SUCCEEDED;
				state.authToken = action.payload.token;
				state.errorMessage = '';
				console.log(state, action);
			}
		);

		builder.addCase(fetchAuthUser.rejected, (state, action: any) => {
			state.loading = Status.FAILED;
			state.errorMessage = action.payload.message;
			console.log(state, action);
		});
	},
});

export const { setEmail, setPassword, setAuthToken } = authSlice.actions;

export default authSlice.reducer;
