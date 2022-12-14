import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { AppRouter } from './components/AppRouter';
import { Navbar } from './components/Navbar';

import { useAppSelector } from './hooks/useAppSelector';
import { selectAuth } from './store/slices/auth/selectors';

const App = () => {
	const { token } = useAppSelector(selectAuth);

	return (
		<Layout className='App'>
			{token ? <Navbar /> : null}
			<Layout.Content>
				<AppRouter />
			</Layout.Content>
		</Layout>
	);
};

export default App;
