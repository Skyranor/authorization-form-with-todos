import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/slice';
import registrationReducer from './slices/registration/slice';
import todosReducer from './slices/todos/slice';

const rootReducer = combineReducers({
	auth: authReducer,
	registration: registrationReducer,
	todosReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
