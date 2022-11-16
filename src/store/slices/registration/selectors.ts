import { RootState } from '../..';

export const selectRegistrationUser = (state: RootState) => state.registration.user;
export const selectRegistration = (state: RootState) => state.registration;
