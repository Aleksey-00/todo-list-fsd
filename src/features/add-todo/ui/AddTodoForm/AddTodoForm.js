import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';
export const AddTodoForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text.trim());
            setText('');
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex gap-3 mb-6", children: [_jsx("input", { type: "text", value: text, onChange: (e) => setText(e.target.value), placeholder: "What needs to be done?", className: "flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" }), _jsx(Button, { type: "submit", disabled: !text.trim(), className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", children: "Add" })] }));
};
