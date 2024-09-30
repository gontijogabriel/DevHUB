'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import Cookies from 'js-cookie';
import decodeJWT from '@/utils/DecodeJWT';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('accessToken');
        if (token) {
            try {
                const decoded = decodeJWT(token);

                if (Date.now() >= decoded.exp * 1000) {
                    setSession(null);
                    Cookies.remove('accessToken');
                    Cookies.remove('refreshToken');
                    router.push('/');
                } else {
                    setSession(decoded);
                }
            } catch (error) {
                console.error('Erro ao decodificar o token:', error);
                setSession(null);
            }
        }
        setLoading(false);
    }, [router]);

    const logout = () => {
        setSession(null);
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        router.push('/');
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            handleGitHubCallback(code);
        }
    }, []);

    const login = () => {
        window.location.href = 'http://localhost:8000/auth/github/login/';
    };

    const handleGitHubCallback = async (code) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/github/', { code });
            const { access, refresh } = response.data;

            Cookies.set('accessToken', access, { expires: 1 });
            Cookies.set('refreshToken', refresh, { expires: 7 });

            window.location.href = '/profile';
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ session, loading, logout, login }}>
            {children}
        </AuthContext.Provider>
    );
};