export type ID = string | number;

export interface ITodo {
	userId: ID;
	id: ID;
	title: string;
	completed: boolean;
}

export interface IUser {
	id: ID;
	name: string;
}
