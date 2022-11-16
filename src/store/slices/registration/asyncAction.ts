import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../models/IUser';

export const fetchRegistrationUser = createAsyncThunk<{ token: string }, IUser>(
	'registration/fetchRegistrationUser',
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<{ token: string }>(
				'https://first-node-js-app-r.herokuapp.com/api/users/register',
				user
			);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);
