import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../router';
import { selectAuth } from '../store/slices/auth/selectors';

export const AppRouter = () => {
	const { token } = useAppSelector(selectAuth);

	if (token) {
		return (
			<Routes>
				{privateRoutes.map((route) => (
					<Route key={route.path} path={route.path} element={<route.component />} />
				))}
				<Route path='*' element={<Navigate to={RouteNames.TODOS} />} />
			</Routes>
		);
	}

	return (
		<Routes>
			{publicRoutes.map((route) => (
				<Route key={route.path} path={route.path} element={<route.component />} />
			))}
			<Route path='*' element={<Navigate to={RouteNames.LOGIN} />} />
		</Routes>
	);
};
