import loginImg from '../assets/img/login.png';
import { Button, Checkbox, Form, Input, InputNumber, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import {
	selectRegistration,
	selectRegistrationUser,
} from '../store/slices/registration/selectors';
import { RouteNames } from '../router';
import { Status } from '../models/Status';
import {
	setAge,
	setEmail,
	setIsMAn,
	setName,
	setPassword,
	setUsername,
} from '../store/slices/registration/slice';
import { fetchRegistrationUser } from '../store/slices/registration/asyncActions';

export const Registration: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { loading, errorMessage } = useAppSelector(selectRegistration);
	const { email, password, age, isMan, name, username } =
		useAppSelector(selectRegistrationUser);

	const onFinish = async () => {
		dispatch(fetchRegistrationUser({ name, username, email, password, isMan, age }));
	};

	return (
		<Layout>
			<div className='login'>
				<img className='login-img' src={loginImg} alt='login' />
				<Form
					style={{ width: 300 }}
					layout='vertical'
					name='register'
					onFinish={onFinish}
					scrollToFirstError>
					<Form.Item
						name='email'
						label='E-mail'
						hasFeedback
						rules={[
							{
								type: 'email',
								message: 'Введен неверный E-mail!',
							},
							{
								required: true,
								message: 'Пожалуйста, введите свой E-mail!',
							},
						]}>
						<Input onChange={(e) => dispatch(setEmail(e.target.value))} />
					</Form.Item>

					<Form.Item
						name='password'
						label='Пароль'
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите ваш пароль!',
							},
							{
								pattern: new RegExp(
									'^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
								),
								message:
									'Пароль должен состоять не менее чем из 8 символов и содержать как минимум 1 заглавную букву, 1 строчную букву, 1 цифру и 1 символ.',
							},
						]}
						hasFeedback>
						<Input.Password
							min={8}
							onChange={(e) => dispatch(setPassword(e.target.value))}
						/>
					</Form.Item>

					<Form.Item
						name='name'
						label='Имя'
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите ваше имя!',
								whitespace: true,
							},
						]}>
						<Input onChange={(e) => dispatch(setName(e.target.value))} />
					</Form.Item>
					<Form.Item
						name='username'
						label='Имя пользователя'
						hasFeedback
						tooltip='Как вы хотите, чтобы другие называли вас??'
						rules={[
							{
								required: true,
								message: 'Пожалуйста, введите ваше имя пользователя!',
								whitespace: true,
							},
						]}>
						<Input onChange={(e) => dispatch(setUsername(e.target.value))} />
					</Form.Item>

					<Form.Item
						name={['user', 'age']}
						label='Возраст'
						rules={[
							{
								required: true,
								type: 'number',
								message: 'Пожалуйста, введите свой возраст от 12 до 100!',
								min: 12,
								max: 100,
							},
						]}>
						<InputNumber onChange={(e) => dispatch(setAge(Number(e)))} />
					</Form.Item>
					<Form.Item name='remember' valuePropName='checked'>
						<Checkbox onChange={(e) => dispatch(setIsMAn(e.target.checked))}>
							Вы человек?
						</Checkbox>
					</Form.Item>
					<Form.Item style={{ margin: 0, textAlign: 'center' }}>
						<Button type='primary' htmlType='submit' loading={loading === Status.PENDING}>
							Зарегистрироваться
						</Button>
					</Form.Item>

					{errorMessage ? (
						<Form.Item style={{ marginTop: 10, textAlign: 'center', color: 'red' }}>
							{errorMessage}
						</Form.Item>
					) : null}

					<Form.Item style={{ textAlign: 'center' }}>
						<Button
							size='large'
							type='link'
							onClick={() => navigate(RouteNames.LOGIN)}
							style={{ padding: '10px 0' }}>
							У вас уже есть аккаунт?
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Layout>
	);
};
