import axios from 'axios';
// import type {ITodo} from '../types.ts'

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () =>
	axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
export const addTodo = (text: string) =>
	axios.post(API_URL, {
		title: text,
		completed: false,
		userId: 1,
	});

export const updateTodo = (id: number, completed: boolean) =>
	axios.patch(`${API_URL}/${id}`, { completed });
export const deleteTodo = (id: number) => axios.delete(`${API_URL}/${id}`);
