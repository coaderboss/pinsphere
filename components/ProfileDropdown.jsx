// components/ProfileDropdown.jsx
'use client';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';

export default function ProfileDropdown() {
  const { setCreatePinOpen } = useAppContext();

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-xl shadow-lg border dark:border-gray-600 py-2 z-50">
      <button
        onClick={() => setCreatePinOpen(true)}
        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white"
      >
        Create Pin
      </button>
      <Link href="/profile" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
        Your Profile
      </Link>
      <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">
        Settings
      </Link>
      <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white">Log out</a>
    </div>
  );
}