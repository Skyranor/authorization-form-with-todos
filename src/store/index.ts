import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/auth/slice';
import registrationReducer from './slices/registration/slice';
import todosReducer from './slices/todos/slice';

const rootReducer = combineReducers({
	auth: authReducer,
	registration: registrationReducer,
	todosReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

const persistConfig = {
	key: 'root',
	storage,
	// blacklist: ['todosReducer'],
};

const persistedReducer = persistReducer<RootReducer, AnyAction>(
	persistConfig,
	rootReducer
);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
