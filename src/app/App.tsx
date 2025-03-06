import { TodoList } from '@/widgets/TodoList/ui/TodoList';
import { useTodoStore } from '@/entities/todo/model/todoStore';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary/ErrorBoundary';

export default function App() {
  const { 
    filteredTodos,
    addTodo,
    toggleTodo,
    clearCompleted
  } = useTodoStore();

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4">
          <TodoList
            todos={filteredTodos()}
            onAdd={addTodo}
            onToggle={toggleTodo}
            onClearCompleted={clearCompleted}
          />
        </main>
      </div>
    </ErrorBoundary>
  );
}  