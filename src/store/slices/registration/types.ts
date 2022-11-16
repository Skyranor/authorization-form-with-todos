import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';

export interface RegistrationState {
	isAuth: boolean;
	user: IUser;
	loading: Status;
	errorMessage: string;
}
