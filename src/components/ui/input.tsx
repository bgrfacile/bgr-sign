import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
}

export const Input: React.FC<InputProps> = ({
                                                label,
                                                error,
                                                helperText,
                                                className,
                                                ...props
                                            }) => {
    return (
        <div className="space-y-1">
            {label && (
                <label className="block text-sm font-medium text-[#7F8C8D]">
                    {label}
                </label>
            )}
            <input
                className={cn(
                    'w-full px-3 py-2 rounded border border-[#BDC3C7] text-[#34495E]',
                    'focus:outline-none focus:border-[#1ABC9C] focus:ring-1 focus:ring-[#1ABC9C]',
                    'placeholder:text-[#7F8C8D]',
                    className
                )}
                {...props}
            />
            {error && <p className="text-sm text-[#E74C3C]">{error}</p>}
            {helperText && <p className="text-sm text-[#7F8C8D]">{helperText}</p>}
        </div>
    );
};