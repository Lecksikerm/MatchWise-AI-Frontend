const LoadingSpinner = ({ label = 'Loading...' }) => (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/20">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            <p>{label}</p>
        </div>
    </div>
);

export default LoadingSpinner;
