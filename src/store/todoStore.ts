import { create } from 'zustand';
import type { ITodo } from '@/types.ts';
import { addTodo, deleteTodo, getTodos, updateTodo } from '../api/todosApi.ts';

type StatesActions = {
	todos: ITodo[];
	loading: boolean;
	adding: boolean;
	loadingId: number | null;
	fetchTodos: () => Promise<void>;
	addTodo: (text: string) => Promise<void>;
	deleteTodo: (id: number) => Promise<void>;
	toggleTodo: (id: number) => Promise<void>;
};

export const useTodoStore = create<StatesActions>((set, get) => ({
	// State
	todos: [],
	loading: false,
	adding: false,
	loadingId: null,

	// Action
	fetchTodos: async () => {
		try {
			set({ loading: true });
			const response = await getTodos();
			const todos: ITodo[] = response.data.map(
				(item: { id: number; title: string; completed: boolean }) => ({
					id: item.id,
					text: item.title,
					completed: item.completed,
				})
			);
			set({ todos, loading: false });
		} catch (error) {
			console.error(error);
			set({ loading: false });
		}
	},

	addTodo: async (text: string) => {
		try {
			set({ adding: true });
			const response = await addTodo(text);

			const newtodos: ITodo = {
				id: Date.now(),
				text: response.data.title,
				completed: response.data.completed,
			};

			set((state) => ({
				todos: [...state.todos, newtodos],
				adding: false,
			}));
		} catch (error) {
			console.error(error);
			set({ adding: false });
		}
	},

	deleteTodo: async (id: number) => {
		try {
			set({ loadingId: id });
			await deleteTodo(id);
			set((state) => ({
				todos: state.todos.filter((todo) => todo.id !== id),
				loadingId: null,
			}));
		} catch (error) {
			console.error(error);
			set({ loadingId: null });
		}
	},

	toggleTodo: async (id: number) => {
		const todo = get().todos.find((t) => t.id === id);
		if (!todo) return;
		const oldCopmleted = todo.completed;

		set((state) => ({
			todos: state.todos.map((t) =>
				t.id === id ? { ...t, completed: !oldCopmleted } : t
			),
		}));
		set({ loadingId: id });

		try {
			await updateTodo(id, !oldCopmleted);
		} catch (error) {
			set((state) => ({
				todos: state.todos.map((t) =>
					t.id === id ? { ...t, completed: oldCopmleted } : t
				),
			}));
			console.error(error);
		} finally {
			set({ loadingId: null });
		}
	},
}));
