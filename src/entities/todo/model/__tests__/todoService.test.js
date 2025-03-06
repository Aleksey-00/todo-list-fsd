import { TodoService } from '../todoService';
describe('TodoService', () => {
    describe('createTodo', () => {
        it('should create a new todo with correct properties', () => {
            const text = 'Test todo';
            const todo = TodoService.createTodo(text);
            expect(todo).toEqual({
                id: expect.any(String),
                text,
                completed: false,
                createdAt: expect.any(Date)
            });
        });
    });
    describe('toggleTodo', () => {
        it('should toggle todo completion status', () => {
            const todo = {
                id: '1',
                text: 'Test todo',
                completed: false,
                createdAt: new Date()
            };
            const toggledTodo = TodoService.toggleTodo(todo);
            expect(toggledTodo.completed).toBe(true);
            const toggledBackTodo = TodoService.toggleTodo(toggledTodo);
            expect(toggledBackTodo.completed).toBe(false);
        });
        it('should not modify other properties when toggling', () => {
            const todo = {
                id: '1',
                text: 'Test todo',
                completed: false,
                createdAt: new Date()
            };
            const toggledTodo = TodoService.toggleTodo(todo);
            expect(toggledTodo.id).toBe(todo.id);
            expect(toggledTodo.text).toBe(todo.text);
            expect(toggledTodo.createdAt).toBe(todo.createdAt);
        });
    });
    describe('filterTodos', () => {
        let todos;
        beforeEach(() => {
            todos = [
                { id: '1', text: 'Todo 1', completed: false, createdAt: new Date() },
                { id: '2', text: 'Todo 2', completed: true, createdAt: new Date() },
                { id: '3', text: 'Todo 3', completed: false, createdAt: new Date() }
            ];
        });
        it('should return all todos when filter is "all"', () => {
            const filtered = TodoService.filterTodos(todos, 'all');
            expect(filtered).toHaveLength(3);
            expect(filtered).toEqual(todos);
        });
        it('should return only active todos when filter is "active"', () => {
            const filtered = TodoService.filterTodos(todos, 'active');
            expect(filtered).toHaveLength(2);
            expect(filtered.every(todo => !todo.completed)).toBe(true);
        });
        it('should return only completed todos when filter is "completed"', () => {
            const filtered = TodoService.filterTodos(todos, 'completed');
            expect(filtered).toHaveLength(1);
            expect(filtered.every(todo => todo.completed)).toBe(true);
        });
    });
    describe('getActiveCount', () => {
        it('should return correct count of active todos', () => {
            const todos = [
                { id: '1', text: 'Todo 1', completed: false, createdAt: new Date() },
                { id: '2', text: 'Todo 2', completed: true, createdAt: new Date() },
                { id: '3', text: 'Todo 3', completed: false, createdAt: new Date() }
            ];
            expect(TodoService.getActiveCount(todos)).toBe(2);
        });
        it('should return 0 when all todos are completed', () => {
            const todos = [
                { id: '1', text: 'Todo 1', completed: true, createdAt: new Date() },
                { id: '2', text: 'Todo 2', completed: true, createdAt: new Date() }
            ];
            expect(TodoService.getActiveCount(todos)).toBe(0);
        });
        it('should return 0 when todos array is empty', () => {
            expect(TodoService.getActiveCount([])).toBe(0);
        });
    });
});
