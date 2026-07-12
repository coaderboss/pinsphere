'use client';
import React from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import NotificationsDropdown from './NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
  const {
    searchTerm, setSearchTerm,
    showSavedOnly, setShowSavedOnly,
    notifOpen, setNotifOpen,
    profileOpen, setProfileOpen,
    theme, toggleTheme
  } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm px-2 sm:px-4 py-3 flex items-center gap-2 sm:gap-4 transition-colors">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">P</span>
        </div>
        <span className="text-xl font-bold text-red-600 dark:text-white hidden md:block">PinSphere</span>
      </Link>

      {/* Search Bar - min-w-0 lagaya taaki mobile me flex container se bahar na bhaage */}
      <div className="flex-1 max-w-2xl mx-auto min-w-0">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 dark:bg-gray-700 dark:text-white rounded-full py-2 pl-8 sm:pl-10 pr-4 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 transition-colors"
          />
          <svg className="absolute left-2.5 top-2.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-500 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Right Icons Container */}
      <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
        {/* Toggle Saved - Mobile pe sirf icon ya 'All' dikhega space bachane ke liye */}
        <button
          onClick={() => setShowSavedOnly(!showSavedOnly)}
          className={`hidden sm:block px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
            showSavedOnly ? 'bg-red-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {showSavedOnly ? 'All' : 'Saved'}
        </button>

        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors" title="Toggle Theme">
          {theme === 'light' ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          )}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }} className="p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          </button>
          {notifOpen && <NotificationsDropdown />}
        </div>

        {/* Profile */}
        <div className="relative">
          <button onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-300 overflow-hidden ring-2 ring-transparent focus:ring-gray-300">
            <img src="https://i.pravatar.cc/40?img=7" alt="User" className="w-full h-full object-cover" />
          </button>
          {profileOpen && <ProfileDropdown />}
        </div>
      </div>
    </nav>
  );
}