import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../../models/IUser';
import { Token } from '../../../models/Token';

export const fetchAuthUser = createAsyncThunk<Token, IUser>(
	'auth/fetchAuthUser',
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<Token>(
				'https://first-node-js-app-r.herokuapp.com/api/auth/login',
				user
			);
			localStorage.setItem('authToken', data.token);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.response.data);
		}
	}
);
