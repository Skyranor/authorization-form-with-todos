export interface ITodo {
	ID: string;
	title: string;
	isCompleted: boolean;
	userID: string;
}

export interface TodosState {
	todos: ITodo[];
	todo: ITodo;
}

export type CreateTodoParams = {
	title: string;
	token: string;
};

export type RemoveTodoParams = {
	token: string;
	ID: string;
};

export type ChangeTodoTitleParams = {
	ID: string;
	token: string;
	title: string;
};

export type IsCompletedTodoParams = {
	ID: string;
	token: string;
};
