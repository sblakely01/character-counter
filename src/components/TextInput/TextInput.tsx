import React from 'react';
import type { TextInputProps } from '../../types';

export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start Typing...',
    initialValue = ''
}) => {
    return (
        <div>
            <textarea 
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-100"
            placeholder={placeholder} 
            defaultValue={initialValue} 
            onChange={(e) => onTextChange(e.target.value)} 
            rows={10} 
             cols={100} />
        </div>
    )
}