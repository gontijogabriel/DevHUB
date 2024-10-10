'use client';

import { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import decodeJWT from '@/utils/DecodeJWT';
import { useRouter } from 'next/navigation';
import axios from 'axios';

interface AuthContextProps {
    session: Session | null;
    loading: boolean;
    logout: () => void;
    login: () => void;
}

interface Session {
    username: string;
    email?: string;
    first_name: string;
    last_name?: string;
    avatar: string;
    location?: string;
    exp: number;
    iat: number;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('accessToken');
        if (token) {
            try {
                const decoded = decodeJWT(token);
                if (decoded) {
                    if (Date.now() >= decoded.exp * 1000) {
                        setSession(null);
                        Cookies.remove('accessToken');
                        Cookies.remove('refreshToken');
                        router.push('/');
                    } else {
                        setSession(decoded as Session);
                    }
                } else {
                    setSession(null);
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

    const handleGitHubCallback = async (code: string) => {
        try {
            const response = await axios.post('http://localhost:8000/auth/github/', { code });
            const { access, refresh } = response.data;
           
            const decoded = decodeJWT(access);
            const username = decoded?.username;

            Cookies.set('accessToken', access, { expires: 1 });
            Cookies.set('refreshToken', refresh, { expires: 7 });

            router.push(`/${username}`);
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
