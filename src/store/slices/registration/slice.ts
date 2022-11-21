import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';
import { Token } from '../../../models/Token';
import { fetchRegistrationUser } from './asyncActions';
import { RegistrationState } from './types';

const initialState: RegistrationState = {
	user: {
		email: '',
		password: '',
		isMan: false,
	},
	loading: Status.IDLE,
	errorMessage: '',
};

const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {
		setName(state, action: PayloadAction<string>) {
			state.user.name = action.payload;
		},
		setUsername(state, action: PayloadAction<string>) {
			state.user.username = action.payload;
		},
		setEmail(state, action: PayloadAction<string>) {
			state.user.email = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.user.password = action.payload;
		},
		setIsMAn(state, action: PayloadAction<boolean>) {
			state.user.isMan = action.payload;
		},
		setAge(state, action: PayloadAction<number>) {
			state.user.age = action.payload;
		},

		setLoading(state, action: PayloadAction<Status>) {
			state.loading = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRegistrationUser.pending, (state, action) => {
			state.loading = Status.PENDING;
			state.errorMessage = '';
		});

		builder.addCase(fetchRegistrationUser.fulfilled, (state, action: PayloadAction<Token>) => {
			state.loading = Status.SUCCEEDED;
			state.errorMessage = '';
			state.user = { email: '', password: '', isMan: false };
		});

		builder.addCase(fetchRegistrationUser.rejected, (state, action: any) => {
			console.log(action.payload.data.errors[0].msg);
			state.loading = Status.FAILED;
			state.errorMessage = action.payload.data.errors[0].msg;
		});
	},
});

export const { setName, setUsername, setEmail, setPassword, setIsMAn, setAge, setLoading } =
	registrationSlice.actions;

export default registrationSlice.reducer;
