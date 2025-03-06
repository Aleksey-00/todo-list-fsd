import { jsx as _jsx } from "react/jsx-runtime";
export const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
    const baseStyles = 'rounded-md font-medium transition-colors';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };
    const sizeStyles = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2',
        large: 'px-6 py-3 text-lg',
    };
    return (_jsx("button", { className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`, ...props, children: children }));
};
