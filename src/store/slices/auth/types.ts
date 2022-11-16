import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';

export interface AuthState {
	authToken: string;
	user: IUser;
	loading: Status;
	errorMessage: string;
}
