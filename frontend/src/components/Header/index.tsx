'use client';

import { useState } from 'react';
import { TbMenuDeep } from 'react-icons/tb';
import DarkModeToggle from '../Buttons/DarkModeToggle'; 

import { useAuth } from '@/context/AuthContext'; 
import LogginButton from '../Buttons/LogginButton'; 
import Link from 'next/link';

interface Session {
  username: string;
  avatar: string;
}

const Header: React.FC = () => {
  const { session, logout, loading, login } = useAuth() as {
    session: Session | null;
    logout: () => void;
    loading: boolean;
    login: () => void;
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
            <Link href="/usuarios">
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
                <img
                  src={session.avatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full"
                />
              </Link>
            </>
          ) : (
            <div className="flex">
              <LogginButton action={login} text='login' style="ml-2" />
            </div>
          )}

          <span onClick={toggleMobileMenu} className="cursor-pointer lg:hidden">
            <TbMenuDeep size={30} />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      >
        <nav
          className={`fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transform transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col h-full justify-between p-6">
            <nav className='flex flex-col gap-4'>
              <h1></h1>
              <li onClick={closeMobileMenu} className="cursor-pointer">
                Meu Perfil
              </li>
              <li onClick={closeMobileMenu} className="cursor-pointer">
                Editar Perfil
              </li>
              <li onClick={closeMobileMenu} className="cursor-pointer">
                Projetos DevHub
              </li>
              <li onClick={closeMobileMenu} className="cursor-pointer">
                Usuários DevHub
              </li>
              <li onClick={closeMobileMenu} className="cursor-pointer">
                Download Curriculo
              </li>
            </nav>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Sair
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
