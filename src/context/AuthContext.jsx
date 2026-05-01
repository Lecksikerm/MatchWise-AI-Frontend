/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState(null);
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
                setUser(response.data.data.user);
            } catch {
                localStorage.removeItem('token');
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeUser();
    }, []);

    const login = async (email, password) => {
        const response = await API.post('/auth/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.data.user);
        setAuthError(null);
        navigate('/upload');
    };

    const register = async (name, email, password) => {
        const response = await API.post('/auth/register', { name, email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.data.user);
        setAuthError(null);
        navigate('/upload');
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('cvId');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                authError,
                setAuthError,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
