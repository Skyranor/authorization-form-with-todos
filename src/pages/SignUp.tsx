// import { Form, Input, InputNumber, Checkbox } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { RouteNames } from '../router';
// import { setAge, setIsMan, setName, setUsername } from '../store/slices/auth/slice';
// import { useAppDispatch } from '../hooks/useAppDispatch';
// import { useAppSelector } from '../hooks/useAppSelector';
// import { AuthorizationForm } from '../components/AuthorizationForm';
// import submitForm from '../utils/submitForm';
// import { selectUser } from '../store/slices/auth/selectors';

// export const SignUp: React.FC = () => {
// 	const navigate = useNavigate();
// 	const dispatch = useAppDispatch();
// 	const { name, username, email, password, isMan, age } = useAppSelector(selectUser);

// 	const onFinish = async () => {
// 		// try {
// 		await submitForm(
// 			'https://first-node-js-app-r.herokuapp.com/api/users/register',
// 			{
// 				name,
// 				username,
// 				email,
// 				password,
// 				isMan,
// 				age,
// 			},
// 			dispatch,
// 			username as any
// 		);
// 		navigate(RouteNames.TODOS);
// 		// } catch (error) {
// 		// 	console.log(error);
// 		// 	alert(error);
// 		// }
// 	};

// 	return (
// 		<AuthorizationForm
// 			onFinish={onFinish}
// 			primaryButtonName={'Зарегистрироваться'}
// 			linkDescription={'У вас уже есть аккаунт?'}
// 			route={RouteNames.LOGIN}>
// 			<Form.Item
// 				name='name'
// 				label='Имя'
// 				hasFeedback
// 				rules={[
// 					{
// 						required: true,
// 						message: 'Пожалуйста, введите ваше имя!',
// 						whitespace: true,
// 					},
// 				]}>
// 				<Input onChange={(e) => dispatch(setName(e.target.value))} />
// 			</Form.Item>
// 			<Form.Item
// 				name='username'
// 				label='Имя пользователя'
// 				hasFeedback
// 				tooltip='Как вы хотите, чтобы другие называли вас??'
// 				rules={[
// 					{
// 						required: true,
// 						message: 'Пожалуйста, введите ваше имя пользователя!',
// 						whitespace: true,
// 					},
// 				]}>
// 				<Input onChange={(e) => dispatch(setUsername(e.target.value))} />
// 			</Form.Item>

// 			<Form.Item
// 				name={['user', 'age']}
// 				label='Возраст'
// 				rules={[
// 					{
// 						required: true,
// 						type: 'number',
// 						message: 'Пожалуйста, введите свой возраст от 12 до 100!',
// 						min: 12,
// 						max: 100,
// 					},
// 				]}>
// 				<InputNumber onChange={(e) => dispatch(setAge(Number(e)))} />
// 			</Form.Item>
// 			<Form.Item name='remember' valuePropName='checked'>
// 				<Checkbox onChange={(e) => dispatch(setIsMan(e.target.checked))}>
// 					Вы человек?
// 				</Checkbox>
// 			</Form.Item>
// 		</AuthorizationForm>
// 	);
// };

import React from 'react';

export const SignUp = () => {
	return <div>SignUp</div>;
};
