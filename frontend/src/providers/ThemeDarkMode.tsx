'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type ThemeDarkModeProps = {
  children: ReactNode;
};

export function ThemeDarkMode({ children }: ThemeDarkModeProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
