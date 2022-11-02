import { RootState } from '../..';

export const selectUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth;
