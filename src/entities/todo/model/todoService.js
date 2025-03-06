import { v4 as uuidv4 } from 'uuid';
export class TodoService {
    static createTodo(text) {
        return {
            id: uuidv4(),
            text,
            completed: false,
            createdAt: new Date(),
        };
    }
    static toggleTodo(todo) {
        return {
            ...todo,
            completed: !todo.completed,
        };
    }
    static filterTodos(todos, filter) {
        switch (filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }
    static getActiveCount(todos) {
        return todos.filter(todo => !todo.completed).length;
    }
}
