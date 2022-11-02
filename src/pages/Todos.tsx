import { Layout, Input, Button, List, Card } from 'antd';
import React, { useContext } from 'react';

export const Todos = () => {
	// const context = useContext(AppContext)
	const data = [
		{
			title: 'Title 1',
		},
		{
			title: 'Title 2',
		},
		{
			title: 'Title 3',
		},
		{
			title: 'Title 4',
		},
	];
	return (
		<Layout>
			<div className='todo'>
				<h1 className='todo-title'>Какой план на сегодня?</h1>
				<div className='todo-task'>
					<Input placeholder='Добавить задачу' size={'large'} style={{ width: '500px' }} />
					<Button type='primary' size={'large'}>
						Добавить задачу
					</Button>
				</div>
				<div className='todo-list'>
					<List
						grid={{ gutter: 16, column: 4 }}
						dataSource={data}
						renderItem={item => (
							<List.Item>
								<Card title={item.title}>Card content</Card>
							</List.Item>
						)}
					/>
				</div>
			</div>
		</Layout>
	);
};
