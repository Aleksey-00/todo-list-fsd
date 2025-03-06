import { Todo } from '@/entities/todo/model/types';
import { TodoItem } from '@/entities/todo/ui/TodoItem/TodoItem';
import { AddTodoForm } from '@/features/add-todo/ui/AddTodoForm/AddTodoForm';
import { Button } from '@/shared/ui/Button/Button';
import { useTodoStore } from '@/entities/todo/model/todoStore';

interface TodoListProps {
  todos: Todo[];
  onAdd: (text: string) => void;
  onToggle: (id: string) => void;
  onClearCompleted: () => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onAdd,
  onToggle,
  onClearCompleted,
}) => {
  const { filter, setFilter, activeCount } = useTodoStore();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Todo List</h1>
        <AddTodoForm onAdd={onAdd} />
        <div className="space-y-3 mb-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
            />
          ))}
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <span className="text-sm text-gray-600">
            {activeCount()} {activeCount() === 1 ? 'item' : 'items'} left
          </span>
          <div className="flex gap-2">
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="small"
              onClick={() => setFilter('all')}
            >
              All
            </Button>
            <Button
              variant={filter === 'active' ? 'primary' : 'secondary'}
              size="small"
              onClick={() => setFilter('active')}
            >
              Active
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'secondary'}
              size="small"
              onClick={() => setFilter('completed')}
            >
              Completed
            </Button>
          </div>
          <Button
            variant="secondary"
            size="small"
            onClick={onClearCompleted}
            className="text-gray-500 hover:text-red-500"
          >
            Clear completed
          </Button>
        </div>
      </div>
    </div>
  );
}; 