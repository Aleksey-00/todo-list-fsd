import { Todo } from './types';
import { v4 as uuidv4 } from 'uuid';

export class TodoService {
  static createTodo(text: string): Todo {
    return {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date(),
    };
  }

  static toggleTodo(todo: Todo): Todo {
    return {
      ...todo,
      completed: !todo.completed,
    };
  }

  static filterTodos(todos: Todo[], filter: 'all' | 'active' | 'completed'): Todo[] {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  static getActiveCount(todos: Todo[]): number {
    return todos.filter(todo => !todo.completed).length;
  }
} 