import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Container from '../components/Container';
import BackButton from '../components/BackButton';

const Register = () => {
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(password)) {
            newErrors.password = 'Password must include uppercase, lowercase, number, and special character';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setMessage('');
        setSuccessMessage('');

        try {
            await register(name.trim(), email.toLowerCase().trim(), password);
            setSuccessMessage('Account created successfully! ✓');
            setTimeout(() => navigate('/upload'), 1500);
        } catch (error) {
            const serverMessage = error?.response?.data?.message || 'Registration failed. Please try again.';
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
                <h1 className="mb-6 text-3xl font-semibold">Create your account</h1>
                {successMessage && <div className="mb-4 rounded-lg bg-green-600/90 p-3 text-sm flex items-center gap-2">
                    <span className="text-lg">✓</span>
                    {successMessage}
                </div>}
                {message && <div className="mb-4 rounded-lg bg-red-600/90 p-3 text-sm">{message}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block">
                        <span className="mb-2 block text-sm text-slate-300">Name</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            required
                            className={`w-full rounded-2xl border bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-slate-700'
                                }`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                    </label>
                    <label className="block">
                        <span className="mb-2 block text-sm text-slate-300">Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required
                            className={`w-full rounded-2xl border bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-slate-700'
                                }`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
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
                                className={`w-full rounded-2xl border bg-slate-950 px-4 py-3 pr-10 text-white outline-none transition focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-slate-700'
                                    }`}
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
                        {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        <p className="mt-1 text-xs text-slate-500">
                            Must be 8+ characters with uppercase, lowercase, number, and special character
                        </p>
                    </label>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? 'Creating account...' : 'Create account'}
                    </button>
                </form>
                <p className="mt-6 text-center text-sm text-slate-400">
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-400 hover:text-blue-300">
                        Sign in
                    </Link>
                </p>
            </div>
        </Container>
    );
};

export default Register;
