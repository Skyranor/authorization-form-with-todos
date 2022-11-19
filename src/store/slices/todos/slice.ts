import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	fetchTodos,
	fetchCreateTodo,
	fetchRemoveTodo,
	fetchChangeTodoTitle,
	fetchIsCompletedTodo,
} from './asyncActions';
import { ITodo, TodosState } from './types';

const initialState: TodosState = {
	todos: [],
	todo: {} as ITodo,
};

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.fulfilled, (state, action) => {
			state.todos = action.payload;
		});

		builder.addCase(fetchCreateTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload);
		});

		builder.addCase(fetchRemoveTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
			state.todos = state.todos.filter((item) => item.ID !== action.payload.ID);
		});

		builder.addCase(fetchChangeTodoTitle.fulfilled, (state, action: PayloadAction<ITodo>) => {
			state.todos = state.todos.map((item) => {
				if (item.ID === action.payload.ID) {
					return action.payload;
				} else {
					return item;
				}
			});
		});

		builder.addCase(fetchIsCompletedTodo.fulfilled, (state, action: PayloadAction<ITodo>) => {
			state.todos = state.todos.map((item) => {
				if (item.ID === action.payload.ID) {
					return action.payload;
				} else {
					return item;
				}
			});
		});
	},
});

export default todosSlice.reducer;
