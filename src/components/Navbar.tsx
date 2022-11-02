import { Layout, Menu, Row } from 'antd';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectUser } from '../store/slices/auth/selectors';

export const Navbar: React.FC = () => {
	const dispatch = useAppDispatch();
	// const { email } = useAppSelector(selectUser);
	const menu = [
		// { key: 2, label: `Привет, ${email}`, selectable: false },
		{ key: 1, label: 'Выйти' },
	];

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('username');
		// dispatch(setIsAuth(false));
	};
	return (
		<Layout.Header>
			<Row className='navbar'>
				{/* <div className='navbar-email'>Привет, {email}</div> */}
				<Menu theme='dark' mode='horizontal' items={menu} onClick={logout}>
					{/* <Item key={1} onClick={() => context?.setIsAuth(false)}>
            Log out
          </Item> */}
				</Menu>
			</Row>
		</Layout.Header>
	);
};
