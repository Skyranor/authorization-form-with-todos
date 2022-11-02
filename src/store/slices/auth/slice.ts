import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { fetchAuthUser } from './asyncActions';
import { AuthState, Status } from './types';

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
	},

	extraReducers: (builder) => {
		builder.addCase(fetchAuthUser.pending, (state, action) => {
			state.loading = Status.PENDING;
			console.log(state, action);
		});

		builder.addCase(
			fetchAuthUser.fulfilled,
			(state, action: PayloadAction<{ token: string }>) => {
				state.loading = Status.SUCCEEDED;
				state.authToken = action.payload.token;
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

export const { setEmail, setPassword } = authSlice.actions;

export default authSlice.reducer;
