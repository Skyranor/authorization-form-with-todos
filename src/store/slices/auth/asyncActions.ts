import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../models/IUser';

export const fetchAuthUser = createAsyncThunk<{ token: string }, IUser>(
	'auth/fetchAuthUser',
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<{ token: string }>(
				'https://first-node-js-app-r.herokuapp.com/api/auth/login',
				user
			);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);
