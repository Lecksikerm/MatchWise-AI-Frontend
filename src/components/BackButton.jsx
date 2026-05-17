import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ className = '' }) => {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            onClick={() => navigate(-1)}
            className={`inline-flex items-center gap-2 text-slate-300 hover:text-white ${className}`}
            aria-label="Go back"
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm">Back</span>
        </button>
    );
};

export default BackButton;
