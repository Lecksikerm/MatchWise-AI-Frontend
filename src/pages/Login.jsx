import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

const Login = () => {
    const { login, setAuthError, authError } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setAuthError(null);
        setMessage('');
        setSuccessMessage('');

        try {
            await login(email, password);
            setSuccessMessage('Login successful! ✓');
            setTimeout(() => {
                navigate('/upload');
            }, 1500);
        } catch (error) {
            const serverMessage = error?.response?.data?.message || 'Login failed. Please check your credentials.';
            setMessage(serverMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <div className="mb-4">
                <BackButton />
            </div>
            <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-xl shadow-slate-950/20">
                <h1 className="mb-6 text-3xl font-semibold">Welcome back</h1>
                {successMessage && <div className="mb-4 rounded-lg bg-green-600/90 p-3 text-sm flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    {successMessage}
                </div>}
                {message && <div className="mb-4 rounded-lg bg-red-600/90 p-3 text-sm">{message}</div>}
                {authError && <div className="mb-4 rounded-lg bg-yellow-600/90 p-3 text-sm">{authError}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="mb-2 block text-sm text-slate-300">Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                            className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </label>
                    <label className="block">
                        <span className="mb-2 block text-sm text-slate-300">Password</span>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 pr-10 text-white outline-none transition focus:border-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-slate-400 hover:text-slate-200 transition"
                                title={showPassword ? 'Hide password' : 'Show password'}
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-slate-400">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-blue-400 hover:text-blue-300">
                        Create one
                    </Link>
                </p>
            </div>
        </Container>
    );
};

export default Login;
