import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuth } from '../store/slices/auth/selectors';
import { selectRegistration } from '../store/slices/registration/selectors';

export default function useIsAuth() {
	const { token } = useAppSelector(selectAuth);
	const lsToken = localStorage.getItem('authToken');
	// const { isAuth } = useAppSelector(selectRegistration);
	return Boolean(lsToken || token);
}
