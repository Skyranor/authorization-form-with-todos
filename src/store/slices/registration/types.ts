import { IUser } from '../../../models/IUser';
import { Status } from '../../../models/Status';

export interface RegistrationState {
	user: IUser;
	loading: Status;
	errorMessage: string;
}
