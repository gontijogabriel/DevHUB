'use client';

import { useState } from 'react';
import { TbMenuDeep } from 'react-icons/tb';
import DarkModeToggle from '../DarkModeToggle';
import { useAuth } from '@/context/AuthContext';
import LogginButton from '../LoginButton';
import Link from 'next/link';

const Header = () => {
    const { session, logout, loading, login } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <header className="w-full border-b border-black dark:border-slate-700">
            <div className="container mx-auto flex items-center justify-between p-4">
                <a href="/">
                    <h1 className="font-jersey20 font-bold text-6xl md:text-7xl">
                        <span className="hidden md:inline">&lt;DevHUB/&gt;</span>
                        <span className="md:hidden">&lt;DH/&gt;</span>
                    </h1>
                </a>

                <nav className="hidden lg:flex flex-grow justify-end mr-4">
                    <ul className="flex gap-4 underline">
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <li>Sobre</li>
                        <a href="/projetos">
                            <li>Projetos</li>
                        </a>
                        <Link href='/usuarios'>
                            <li>Usuários</li>
                        </Link>
                        
                    </ul>
                </nav>

                <div className="flex items-center">

                    <DarkModeToggle />
                    {session ? (
                        <>
                            <Link 
                                href={`/${session.username}`}
                                className="flex items-center mx-4 justify-center w-12 h-12 bg-gray-200 rounded-full text-black font-bold font-sans"
                            >
                                <img src={session.avatar} alt="User Avatar" className="w-full h-full rounded-full" />
                            </Link>
                        </>
                    ) : (
                        <div className='flex'>
                            <p>-</p>
                            <LogginButton action={login} text='Login' style='ml-2' />
                            <p>-</p>
                        </div>
                    )}

                    <span onClick={toggleMobileMenu} className="cursor-pointer lg:hidden">
                        <TbMenuDeep size={30} />
                    </span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={closeMobileMenu}
            >
                <nav
                    className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <ul className="flex flex-col items-start gap-4 p-6">
                        <li onClick={closeMobileMenu} className="cursor-pointer">Home</li>
                        <li onClick={closeMobileMenu} className="cursor-pointer">Sobre</li>
                        <li onClick={closeMobileMenu} className="cursor-pointer">Participe</li>
                        <li onClick={closeMobileMenu} className="cursor-pointer">Usuários</li>
                        <button
                            onClick={logout}
                            className="mx-2 px-4 py-2 bg-red-500 text-white rounded"
                        >
                            Logout
                        </button>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
