import { create } from 'zustand';
import { Todo } from './types';
import { TodoService } from './todoService';

interface TodoStore {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  filteredTodos: () => Todo[];
  activeCount: () => number;
}

type State = Pick<TodoStore, 'todos' | 'filter'>;

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [] as Todo[],
  filter: 'all' as const,

  addTodo: (text: string) => {
    const newTodo = TodoService.createTodo(text);
    set((state: State) => ({ todos: [...state.todos, newTodo] }));
  },

  toggleTodo: (id: string) => {
    set((state: State) => ({
      todos: state.todos.map((todo: Todo) =>
        todo.id === id ? TodoService.toggleTodo(todo) : todo
      ),
    }));
  },

  clearCompleted: () => {
    set((state: State) => ({
      todos: state.todos.filter((todo: Todo) => !todo.completed),
    }));
  },

  setFilter: (filter: 'all' | 'active' | 'completed') => {
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