// components/ThemeWrapper.jsx
'use client';
import { useEffect } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function ThemeWrapper({ children }) {
  const { theme } = useAppContext();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return <>{children}</>;
}