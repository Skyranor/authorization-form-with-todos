import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../router';
import { AuthorizationForm } from '../components/AuthorizationForm';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuth, selectUser } from '../store/slices/auth/selectors';
import { fetchAuthUser } from '../store/slices/auth/asyncActions';

export const Login: React.FC = () => {
	const navigate = useNavigate();
	const { email, password } = useAppSelector(selectUser);
	const { authToken } = useAppSelector(selectAuth);
	const dispatch = useAppDispatch();

	const onFinish = () => {
		dispatch(
			fetchAuthUser({
				email,
				password,
			})
		);

		if (authToken) {
			navigate(RouteNames.TODOS);
		}
	};

	return (
		<AuthorizationForm
			onFinish={onFinish}
			primaryButtonName={'Войти'}
			linkDescription={'У вас нет аккаунта?'}
			route={RouteNames.SIGN_UP}
		/>
	);
};
