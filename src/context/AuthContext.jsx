/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState(null);
    const [authSuccess, setAuthSuccess] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await API.get('/auth/me');
                setUser(response.data?.data?.user || null);
            } catch (err) {
                console.error('Auth init error:', err);
                localStorage.removeItem('token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        // Hard timeout fallback to prevent infinite loading
        const hardTimeout = setTimeout(() => {
            if (loading) {
                console.warn('Auth initialization timed out');
                setLoading(false);
            }
        }, 6000);

        initializeUser();

        return () => clearTimeout(hardTimeout);
    }, []);

    const login = async (email, password) => {
        try {
            const response = await API.post('/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            setUser(response.data?.data?.user || null);
            setAuthError(null);
            setAuthSuccess('Login successful!');
        } catch (err) {
            setAuthError(err.response?.data?.message || 'Login failed');
            throw err;
        }
    };

    const register = async (name, email, password) => {
        try {
            const response = await API.post('/auth/register', { name, email, password });
            localStorage.setItem('token', response.data.token);
            setUser(response.data?.data?.user || null);
            setAuthError(null);
            setAuthSuccess('Registration successful!');
        } catch (err) {
            setAuthError(err.response?.data?.message || 'Registration failed');
            throw err;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cvId');
        setUser(null);
        setAuthSuccess('Logout successful! ✓');
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authError,
                setAuthError,
                authSuccess,
                setAuthSuccess,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};