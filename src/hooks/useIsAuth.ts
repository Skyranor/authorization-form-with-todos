import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuth } from '../store/slices/auth/selectors';
import { selectRegistration } from '../store/slices/registration/selectors';

export default function useIsAuth() {
	const { authToken } = useAppSelector(selectAuth);
	const { isAuth } = useAppSelector(selectRegistration);
	return authToken || isAuth;
}