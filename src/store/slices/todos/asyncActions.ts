import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Token } from '../../../models/Token';
import {
	ChangeTodoTitleParams,
	CreateTodoParams,
	IsCompletedTodoParams,
	ITodo,
	RemoveTodoParams,
} from './types';

export const fetchCreateTodo = createAsyncThunk<ITodo, CreateTodoParams>(
	'todos/fetchCreateTodo',
	async ({ title, token }, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(
				'https://first-node-js-app-r.herokuapp.com/api/todos/',
				{ title },
				{
					headers: {
						Authorization: 'Bearer ' + token,
					},
				}
			);
			return data;
		} catch (error: any) {
			alert(error);
			console.log(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchTodos = createAsyncThunk<ITodo[], Token>(
	'todos/fetchAllTodos',
	async ({ token }, { rejectWithValue }) => {
		try {
			const { data } = await axios<ITodo[]>('https://first-node-js-app-r.herokuapp.com/api/todos', {
				headers: {
					Authorization: 'Bearer ' + token,
				},
			});
			return data;
		} catch (error: any) {
			alert(error);
			console.log(error);
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchRemoveTodo = createAsyncThunk<ITodo, RemoveTodoParams>(
	'todos/fetchRemoveTodo',
	async ({ token, ID }) => {
		const { data } = await axios.delete<ITodo>(
			'https://first-node-js-app-r.herokuapp.com/api/todos/' + ID,
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
		);
		return data;
	}
);

export const fetchChangeTodoTitle = createAsyncThunk<ITodo, ChangeTodoTitleParams>(
	'todos/fetchChangeTodoTitle',
	async ({ ID, token, title }) => {
		const { data } = await axios.patch<ITodo>(
			'https://first-node-js-app-r.herokuapp.com/api/todos/' + ID,
			{ title },
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
		);
		return data;
	}
);

export const fetchIsCompletedTodo = createAsyncThunk<ITodo, IsCompletedTodoParams>(
	'todos/fetchIsCompletedTodo',
	async ({ ID, token }) => {
		const { data } = await axios.patch<ITodo>(
			`https://first-node-js-app-r.herokuapp.com/api/todos/${ID}/isCompleted`,
			{},
			{
				headers: {
					Authorization: 'Bearer ' + token,
				},
			}
		);
		return data;
	}
);
