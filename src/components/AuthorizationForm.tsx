import loginImg from '../assets/img/login.png';
import { Button, Form, Input, Layout } from 'antd';

import { useAppDispatch } from '../hooks/useAppDispatch';
import { setEmail, setPassword } from '../store/slices/auth/slice';
import { useNavigate } from 'react-router-dom';
import React, { PropsWithChildren } from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuth } from '../store/slices/auth/selectors';
import { Status } from '../store/slices/auth/types';

type AuthorizationFormProps = {
	onFinish: () => void;
	primaryButtonName: string;
	linkDescription: string;
	route: string;
};

export const AuthorizationForm: React.FC<PropsWithChildren<AuthorizationFormProps>> = ({
	onFinish,
	primaryButtonName,
	linkDescription,
	route,
	children,
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { loading, errorMessage } = useAppSelector(selectAuth);

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

					{children}

					<Form.Item style={{ margin: 0, textAlign: 'center' }}>
						<Button type='primary' htmlType='submit' loading={loading === Status.PENDING}>
							{primaryButtonName}
						</Button>
					</Form.Item>

					{errorMessage ? (
						<Form.Item style={{ margin: 0, textAlign: 'center', color: 'red' }}>
							{errorMessage}
						</Form.Item>
					) : null}

					<Form.Item style={{ textAlign: 'center' }}>
						<Button
							size='large'
							type='link'
							onClick={() => navigate(route)}
							style={{ padding: '10px 0' }}>
							{linkDescription}
						</Button>
					</Form.Item>
				</Form>
			</div>
		</Layout>
	);
};