import { CheckOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Input, Button, List, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { selectAuth } from '../store/slices/auth/selectors';
import {
	fetchTodos,
	fetchCreateTodo,
	fetchRemoveTodo,
	fetchChangeTodoTitle,
	fetchIsCompletedTodo,
} from '../store/slices/todos/asyncActions';
import { selectTodos } from '../store/slices/todos/selectors';

export const Todos = () => {
	const dispatch = useAppDispatch();
	const { todos } = useAppSelector(selectTodos);
	const { token } = useAppSelector(selectAuth);
	const [todoTitle, setTodoTitle] = useState('');

	const colors = ['#3843e0', '#e3276c', '#ae27e3'];

	useEffect(() => {
		dispatch(fetchTodos({ token }));
	}, []);

	const handleCreateTodo = () => {
		dispatch(fetchCreateTodo({ title: todoTitle, token }));
		setTodoTitle('');
	};

	const handleRemoveTodo = (id: string) => {
		dispatch(fetchRemoveTodo({ token, ID: id }));
	};

	const handleChangeTodoTitle = (id: string, title: string) => {
		dispatch(fetchChangeTodoTitle({ token, ID: id, title }));
		console.log(token);
	};

	const handleIsCompletedTodo = (id: string) => {
		console.log(token);
		dispatch(fetchIsCompletedTodo({ token, ID: id }));
	};

	return (
		<div className='todo'>
			<h1 className='todo-title'>Какой план на сегодня?</h1>
			<div className='todo-create-task'>
				<Input
					value={todoTitle}
					onChange={(e) => setTodoTitle(e.target.value)}
					placeholder='Добавить задачу'
					size={'large'}
					className='task-input'
					onKeyDown={(e) => (e.key === 'Enter' ? handleCreateTodo() : false)}
				/>
				<Button
					onClick={handleCreateTodo}
					type='primary'
					size={'large'}
					className='button'>
					Добавить задачу
				</Button>
			</div>
			<List
				className='task-list'
				dataSource={todos}
				renderItem={(item, index) => (
					<List.Item
						className='task'
						style={{ backgroundColor: colors[index % colors.length] }}>
						<Typography.Text
							editable={{
								onChange(value) {
									handleChangeTodoTitle(item.ID, value);
								},
							}}
							className={item.isCompleted ? 'task-title completed' : 'task-title'}>
							{index + 1}.{item.title}
						</Typography.Text>

						<div className='task-buttons-wrapper'>
							<Button
								onClick={() => handleRemoveTodo(item.ID)}
								icon={<CloseCircleOutlined style={{ fontSize: 25 }} />}
							/>
							<Button
								onClick={() => handleIsCompletedTodo(item.ID)}
								icon={<CheckOutlined style={{ fontSize: 25 }} />}
							/>
						</div>
					</List.Item>
				)}
			/>
		</div>
	);
};
