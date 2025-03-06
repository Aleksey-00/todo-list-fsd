import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TodoItem } from '@/entities/todo/ui/TodoItem/TodoItem';
import { AddTodoForm } from '@/features/add-todo/ui/AddTodoForm/AddTodoForm';
import { Button } from '@/shared/ui/Button/Button';
import { useTodoStore } from '@/entities/todo/model/todoStore';
export const TodoList = ({ todos, onAdd, onToggle, onClearCompleted, }) => {
    const { filter, setFilter, activeCount } = useTodoStore();
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: _jsxs("div", { className: "w-full max-w-lg bg-white rounded-lg shadow-lg p-6", children: [_jsx("h1", { className: "text-3xl font-bold text-center text-gray-800 mb-6", children: "Todo List" }), _jsx(AddTodoForm, { onAdd: onAdd }), _jsx("div", { className: "space-y-3 mb-4", children: todos.map((todo) => (_jsx(TodoItem, { todo: todo, onToggle: onToggle }, todo.id))) }), _jsxs("div", { className: "flex items-center justify-between border-t pt-4", children: [_jsxs("span", { className: "text-sm text-gray-600", children: [activeCount(), " ", activeCount() === 1 ? 'item' : 'items', " left"] }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { variant: filter === 'all' ? 'primary' : 'secondary', size: "small", onClick: () => setFilter('all'), children: "All" }), _jsx(Button, { variant: filter === 'active' ? 'primary' : 'secondary', size: "small", onClick: () => setFilter('active'), children: "Active" }), _jsx(Button, { variant: filter === 'completed' ? 'primary' : 'secondary', size: "small", onClick: () => setFilter('completed'), children: "Completed" })] }), _jsx(Button, { variant: "secondary", size: "small", onClick: onClearCompleted, className: "text-gray-500 hover:text-red-500", children: "Clear completed" })] })] }) }));
};
