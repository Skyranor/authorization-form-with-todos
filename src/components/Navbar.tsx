import { Layout, Menu, Row } from 'antd';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectUser } from '../store/slices/auth/selectors';
import { setAuthToken, setEmail } from '../store/slices/auth/slice';

export const Navbar: React.FC = () => {
	const dispatch = useAppDispatch();
	const { email } = useAppSelector(selectUser);
	const menu = [{ key: 1, label: 'Выйти' }];

	const logout = () => {
		dispatch(setAuthToken(''));
		dispatch(setEmail(''));
	};
	return (
		<Layout.Header>
			<Row className='navbar'>
				<div className='navbar-email'>Привет, {email}</div>
				<Menu theme='dark' mode='horizontal' items={menu} onClick={logout}></Menu>
			</Row>
		</Layout.Header>
	);
};
