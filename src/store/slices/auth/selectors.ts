import { RootState } from '../..';

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth;
