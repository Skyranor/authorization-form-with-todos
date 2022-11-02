import { IUser } from '../../../models/IUser';

export interface AuthState {
	authToken: string;
	user: IUser;
	loading: Status;
	errorMessage: string;
}

export enum Status {
	IDLE = 'idle',
	PENDING = 'pending',
	SUCCEEDED = 'succeeded',
	FAILED = 'failed',
}
