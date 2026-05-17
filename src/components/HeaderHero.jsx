import React from 'react';

const ScreenshotIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="40" height="36" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <rect x="8" y="10" width="32" height="24" rx="3" fill="#0f172a" />
        <rect x="12" y="14" width="20" height="3" rx="1.5" fill="#3b82f6" opacity="0.8" />
        <rect x="12" y="20" width="24" height="2" rx="1" fill="#475569" />
        <rect x="12" y="24" width="18" height="2" rx="1" fill="#475569" />
        <rect x="12" y="28" width="22" height="2" rx="1" fill="#475569" />
        <circle cx="36" cy="38" r="3" fill="#22c55e" />
        <rect x="8" y="38" width="20" height="2" rx="1" fill="#334155" />
    </svg>
);

const HeaderHero = () => {
    return (
        <div className="pointer-events-none sticky top-20 z-10 flex justify-center">
            <div className="w-full max-w-6xl px-4">
                <div className="rounded-2xl bg-linear-to-r from-slate-900/80 to-slate-800/60 border border-slate-800/40 p-4 backdrop-blur-md flex items-center gap-4 shadow-lg">
                    <div className="flex-1 pointer-events-auto">
                        <h2 className="text-lg font-semibold text-white">Instant AI summaries & ATS-friendly scoring</h2>
                        <p className="text-sm text-slate-400">Upload a CV and get a recruiter-ready summary and match score in seconds.</p>
                    </div>
                    <div className="shrink-0 hidden sm:flex items-center gap-3 pointer-events-auto">
                        <ScreenshotIcon />
                        <div className="text-xs text-slate-300">Trusted by early teams</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderHero;