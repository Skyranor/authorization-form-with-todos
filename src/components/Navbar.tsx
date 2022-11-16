import { Layout, Menu, Row } from 'antd';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setAuthToken } from '../store/slices/auth/slice';
import { setIsAuth } from '../store/slices/registration/slice';

export const Navbar: React.FC = () => {
	const dispatch = useAppDispatch();
	const menu = [{ key: 1, label: 'Выйти' }];

	const logout = () => {
		dispatch(setAuthToken(''));
		dispatch(setIsAuth(false));
	};
	return (
		<Layout.Header>
			<Row className='navbar'>
				<Menu theme='dark' mode='horizontal' items={menu} onClick={logout}></Menu>
			</Row>
		</Layout.Header>
	);
};
