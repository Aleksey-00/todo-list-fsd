import { create } from 'zustand';
import { TodoService } from './todoService';
export const useTodoStore = create((set, get) => ({
    todos: [],
    filter: 'all',
    addTodo: (text) => {
        const newTodo = TodoService.createTodo(text);
        set((state) => ({ todos: [...state.todos, newTodo] }));
    },
    toggleTodo: (id) => {
        set((state) => ({
            todos: state.todos.map((todo) => todo.id === id ? TodoService.toggleTodo(todo) : todo),
        }));
    },
    clearCompleted: () => {
        set((state) => ({
            todos: state.todos.filter((todo) => !todo.completed),
        }));
    },
    setFilter: (filter) => {
        set({ filter });
    },
    filteredTodos: () => {
        const { todos, filter } = get();
        return TodoService.filterTodos(todos, filter);
    },
    activeCount: () => {
        const { todos } = get();
        return TodoService.getActiveCount(todos);
    },
}));
