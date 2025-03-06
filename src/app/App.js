import { jsx as _jsx } from "react/jsx-runtime";
import { TodoList } from '@/widgets/TodoList/ui/TodoList';
import { useTodoStore } from '@/entities/todo/model/todoStore';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary/ErrorBoundary';
export default function App() {
    const { filteredTodos, addTodo, toggleTodo, clearCompleted } = useTodoStore();
    return (_jsx(ErrorBoundary, { children: _jsx("div", { className: "min-h-screen bg-gray-100", children: _jsx("main", { className: "container mx-auto px-4", children: _jsx(TodoList, { todos: filteredTodos(), onAdd: addTodo, onToggle: toggleTodo, onClearCompleted: clearCompleted }) }) }) }));
}
