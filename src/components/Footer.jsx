import React from 'react';

const Footer = () => (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-6 mt-12">
        <div className="mx-auto max-w-6xl px-4 text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm">© {new Date().getFullYear()} MatchWise AI — All rights reserved.</div>
            <div className="flex gap-4 items-center">
                <a href="/" className="text-sm text-slate-300 hover:text-white">Home</a>
                <a href="/terms" className="text-sm text-slate-300 hover:text-white">Terms</a>
                <a href="/privacy" className="text-sm text-slate-300 hover:text-white">Privacy</a>
            </div>
        </div>
    </footer>
);

export default Footer;
