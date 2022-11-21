import { Layout, Menu, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { RouteNames } from '../router';
import { setToken } from '../store/slices/auth/slice';

export const Navbar: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const menu = [{ key: 1, label: 'Выйти' }];

	const logout = () => {
		localStorage.removeItem('authToken');
		dispatch(setToken(''));
		navigate(RouteNames.LOGIN);
	};
	return (
		<Layout.Header>
			<Row className='navbar'>
				<Menu theme='dark' mode='horizontal' items={menu} onClick={logout}></Menu>
			</Row>
		</Layout.Header>
	);
};
