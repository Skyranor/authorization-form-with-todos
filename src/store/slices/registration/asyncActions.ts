import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { message } from 'antd';
import { IUser } from '../../../models/IUser';
import { Token } from '../../../models/Token';

export const fetchRegistrationUser = createAsyncThunk<Token, IUser>(
	'registration/fetchRegistrationUser',
	async (user, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<Token>(
				'https://first-node-js-app-r.herokuapp.com/api/users/register',
				user
			);
			message.success('Вы успешно зарегистрированы!');
			return data;
		} catch (error: any) {
			return rejectWithValue(error.response);
		}
	}
);
