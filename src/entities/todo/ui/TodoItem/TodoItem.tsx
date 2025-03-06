import { Todo } from '@/entities/todo/model/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <div
      className={`flex items-center p-4 bg-white border rounded-lg shadow-sm transition-colors ${
        todo.completed ? 'bg-gray-50' : ''
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <span
        className={`ml-3 text-gray-700 ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
    </div>
  );
}; 