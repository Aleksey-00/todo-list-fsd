import { useTodoStore } from '../todoStore';

describe('TodoStore', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [], filter: 'all' });
  });

  it('should add a new todo', async () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Test todo');
    
    const { todos } = useTodoStore.getState();
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe('Test todo');
    expect(todos[0].completed).toBe(false);
  });

  it('should toggle todo completion status', async () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Test todo');
    
    const { todos, toggleTodo } = useTodoStore.getState();
    toggleTodo(todos[0].id);
    
    const { todos: updatedTodos } = useTodoStore.getState();
    expect(updatedTodos[0].completed).toBe(true);
  });

  it('should clear completed todos', async () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Todo 1');
    addTodo('Todo 2');
    
    const { todos, toggleTodo, clearCompleted } = useTodoStore.getState();
    toggleTodo(todos[0].id);
    clearCompleted();
    
    const { todos: remainingTodos } = useTodoStore.getState();
    expect(remainingTodos).toHaveLength(1);
    expect(remainingTodos[0].text).toBe('Todo 2');
  });

  it('should filter todos correctly', async () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Todo 1');
    addTodo('Todo 2');
    
    const { todos, toggleTodo, setFilter, filteredTodos } = useTodoStore.getState();
    toggleTodo(todos[0].id);
    
    setFilter('completed');
    expect(filteredTodos()).toHaveLength(1);
    expect(filteredTodos()[0].completed).toBe(true);
    
    setFilter('active');
    expect(filteredTodos()).toHaveLength(1);
    expect(filteredTodos()[0].completed).toBe(false);
    
    setFilter('all');
    expect(filteredTodos()).toHaveLength(2);
  });

  it('should count active todos correctly', async () => {
    const { addTodo } = useTodoStore.getState();
    addTodo('Todo 1');
    addTodo('Todo 2');
    
    const { todos, toggleTodo, activeCount } = useTodoStore.getState();
    expect(activeCount()).toBe(2);
    
    toggleTodo(todos[0].id);
    expect(activeCount()).toBe(1);
  });
}); 