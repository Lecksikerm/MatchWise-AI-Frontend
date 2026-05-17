import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const MatchWiseLogo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="36" height="36" rx="10" fill="#3b82f6" />
        <rect x="2" y="2" width="36" height="36" rx="10" stroke="#60a5fa" strokeWidth="2" />
        <path d="M12 28L18 16L22 22L28 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="12" r="3" fill="#22c55e" />
        <path d="M8 20H14" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M8 24H12" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
);

const Feature = ({ title, desc, icon }) => (
    <div className="flex flex-col items-start gap-3 p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition">
        <div className="text-2xl">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
    </div>
);

const HeroIllustration = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="360" height="220" rx="12" fill="#1e293b" stroke="#334155" strokeWidth="2" />
        <rect x="40" y="60" width="200" height="16" rx="4" fill="#3b82f6" opacity="0.8" />
        <rect x="40" y="88" width="160" height="10" rx="3" fill="#475569" />
        <rect x="40" y="106" width="180" height="10" rx="3" fill="#475569" />
        <rect x="40" y="124" width="140" height="10" rx="3" fill="#475569" />
        <rect x="40" y="150" width="320" height="2" rx="1" fill="#334155" />
        <rect x="40" y="164" width="100" height="24" rx="6" fill="#22c55e" opacity="0.9" />
        <text x="55" y="181" fill="#fff" fontSize="12" fontWeight="600">92% Match</text>
        <rect x="150" y="164" width="100" height="24" rx="6" fill="#3b82f6" opacity="0.9" />
        <text x="165" y="181" fill="#fff" fontSize="12" fontWeight="600">AI Score</text>
        <circle cx="320" cy="90" r="35" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" strokeDasharray="165 55" transform="rotate(-90 320 90)" />
        <text x="320" y="95" fill="#fff" fontSize="18" fontWeight="bold" textAnchor="middle">92</text>
        <rect x="260" y="150" width="100" height="80" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
        <rect x="270" y="160" width="80" height="8" rx="2" fill="#475569" />
        <rect x="270" y="175" width="60" height="6" rx="2" fill="#334155" />
        <rect x="270" y="188" width="70" height="6" rx="2" fill="#334155" />
        <rect x="270" y="201" width="50" height="6" rx="2" fill="#334155" />
        <rect x="270" y="216" width="80" height="8" rx="2" fill="#22c55e" opacity="0.6" />
    </svg>
);

const UploadIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
        <path d="M20 28L24 20L28 28" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 20V32" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <rect x="18" y="14" width="12" height="2" rx="1" fill="#475569" />
        <rect x="16" y="10" width="16" height="2" rx="1" fill="#475569" />
    </svg>
);

const AIIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="40" height="40" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="2" />
        <circle cx="16" cy="20" r="3" fill="#8b5cf6" />
        <circle cx="32" cy="20" r="3" fill="#8b5cf6" />
        <circle cx="24" cy="14" r="3" fill="#8b5cf6" />
        <path d="M16 28C16 28 20 34 24 34C28 34 32 28 32 28" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
        <rect x="20" y="36" width="8" height="4" rx="2" fill="#475569" />
    </svg>
);

const MatchIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="20" fill="#1e293b" stroke="#22c55e" strokeWidth="2" />
        <path d="M14 24L20 30L34 16" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="8" fill="#22c55e" opacity="0.2" />
    </svg>
);

const CompanyLogo = ({ letter, color }) => (
    <div className={`h-14 px-6 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center gap-2`}>
        <div className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-white font-bold text-sm`}>
            {letter}
        </div>
        <span className="text-slate-400 text-sm font-medium">Company {letter}</span>
    </div>
);

const Landing = () => {
    return (
        <Container className="py-16">
            {/* Logo at top left */}
            <div className="flex items-center gap-3 mb-12">
                <MatchWiseLogo />
                <div>
                    <span className="text-xl font-bold text-white">MatchWise</span>
                    <span className="text-xl font-bold text-blue-500"> AI</span>
                </div>
            </div>

            <section className="w-full flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-12">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white leading-tight">
                        MatchWise AI — Smarter CV matching
                    </h1>
                    <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                        Upload your resume and let our AI extract skills, summarize your experience, and score matches against job descriptions.
                        Get actionable advice to improve your chances.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                        <Link
                            to="/register"
                            className="rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg transition hover:bg-blue-500 hover:shadow-blue-500/25"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/login"
                            className="rounded-full bg-slate-800 px-6 py-3 text-slate-200 font-medium transition hover:bg-slate-700"
                        >
                            Sign in
                        </Link>
                        <span className="hidden sm:inline-block text-sm text-slate-500 ml-2">
                            No credit card required • Free tier
                        </span>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center relative">
                    <div className="w-full bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
                        <HeroIllustration />
                    </div>
                    <div className="absolute -bottom-6 right-6 hidden md:block">
                        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42" cy="42" r="40" stroke="#22c55e" strokeWidth="3" opacity="0.14" />
                            <path d="M26 44c6 8 14 8 20 0" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <h2 className="text-2xl font-bold text-white mb-8">Features</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Feature
                        icon={<UploadIcon />}
                        title="Universal extraction"
                        desc="Supports PDF, DOCX, TXT, and image OCR with AI fallback. Our system reads any resume format you throw at it."
                    />
                    <Feature
                        icon={<AIIcon />}
                        title="AI summaries"
                        desc="Concise role-ready summaries for recruiters and ATS. Transform your experience into compelling narratives."
                    />
                    <Feature
                        icon={<MatchIcon />}
                        title="Job matching"
                        desc="Score your CV against roles and get improvement advice. Know exactly where you stand before applying."
                    />
                </div>
            </section>

            <section className="mt-20">
                <h3 className="text-xl font-semibold text-white mb-6">Trusted by teams</h3>
                <div className="flex flex-wrap gap-4 items-center">
                    <CompanyLogo letter="A" color="bg-blue-600" />
                    <CompanyLogo letter="B" color="bg-purple-600" />
                    <CompanyLogo letter="C" color="bg-emerald-600" />
                </div>
            </section>

            <section className="mt-20 text-center">
                <p className="text-sm text-slate-500 max-w-2xl mx-auto">
                    Built with privacy-conscious processing. Files are used to generate summaries and can be removed from cloud storage at any time.
                </p>
            </section>
        </Container>
    );
};

export default Landing;