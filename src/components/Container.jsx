import React from 'react';

const Container = ({ children, className = '' }) => {
    return (
        <div className={`min-h-screen bg-slate-950 text-white px-4 py-8 ${className}`}>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
        </div>
    );
};

export default Container;