import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const TodoItem = ({ todo, onToggle }) => {
    return (_jsxs("div", { className: `flex items-center p-4 bg-white border rounded-lg shadow-sm transition-colors ${todo.completed ? 'bg-gray-50' : ''}`, children: [_jsx("input", { type: "checkbox", checked: todo.completed, onChange: () => onToggle(todo.id), className: "w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" }), _jsx("span", { className: `ml-3 text-gray-700 ${todo.completed ? 'line-through text-gray-400' : ''}`, children: todo.text })] }));
};
