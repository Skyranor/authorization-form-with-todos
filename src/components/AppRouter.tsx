import { Routes, Route, Navigate } from 'react-router-dom';
import useIsAuth from '../hooks/useIsAuth';
import { privateRoutes, publicRoutes, RouteNames } from '../router';

export const AppRouter = () => {
	const isAuth = useIsAuth();

	if (isAuth) {
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
