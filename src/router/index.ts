import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { Todos } from '../pages/Todos';

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  SIGN_UP = '/signup',
  LOGIN = '/login',
  TODOS = '/todos'
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, component: Login },
  { path: RouteNames.SIGN_UP, component: SignUp }
];

export const privateRoutes: IRoute[] = [{ path: RouteNames.TODOS, component: Todos }];
