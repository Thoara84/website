import React from 'react';

export function Button({ children, variant = 'solid', className = '', ...props }) {
    const baseClasses = 'inline-flex items-center gap-2 font-medium rounded-full';
    const variants = {
        solid: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50'
    };
    const classes = `${baseClasses} ${variants[variant]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}