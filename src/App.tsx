import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';

import useIsAuth from './hooks/useIsAuth';

const App = () => {
	const isAuth = useIsAuth();

	return (
		<Layout className='App'>
			{isAuth ? <Navbar /> : null}
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
		</Layout>
	);
};

export default App;
