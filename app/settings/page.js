'use client';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

export default function SettingsPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useAppContext();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-bold text-xl">Settings</h1>
      </div>

      <div className="max-w-2xl mx-auto p-6 mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-lg font-bold mb-4 border-b pb-2 dark:border-gray-700">Appearance</h2>
        <div className="flex items-center justify-between py-2">
          <div>
            <p className="font-medium">Theme Mode</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Current: {theme === 'light' ? 'Light' : 'Dark'}</p>
          </div>
          <button 
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Toggle to {theme === 'light' ? 'Dark' : 'Light'}
          </button>
        </div>
      </div>
    </div>
  );
}