// app/profile/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext, CURRENT_USER } from '@/context/AppContext';
import PinCard from '@/components/PinCard';
import MasonryGrid from '@/components/MasonryGrid'; // re-use? Better to create a simple grid for both tabs.

export default function ProfilePage() {
  const router = useRouter();
  const { allPins, savedPins } = useAppContext();
  const [activeTab, setActiveTab] = useState('created');

  const userPins = allPins.filter(pin => pin.author === CURRENT_USER);
  const savedPinObjects = allPins.filter(pin => savedPins.hasOwnProperty(pin.id));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm px-4 py-3 flex items-center gap-4">
        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="font-bold text-xl">{CURRENT_USER}</h1>
      </div>

      {/* Profile info */}
      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/100?img=7"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white shadow"
          />
          <div>
            <h2 className="text-2xl font-bold">{CURRENT_USER}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">@you • 42 followers</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b dark:border-gray-600 mb-4">
          <button
            onClick={() => setActiveTab('created')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'created'
                ? 'border-b-2 border-red-600 text-red-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-300'
            }`}
          >
            Created ({userPins.length})
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`px-4 py-2 font-medium text-sm transition-colors ${
              activeTab === 'saved'
                ? 'border-b-2 border-red-600 text-red-600'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-300'
            }`}
          >
            Saved ({savedPinObjects.length})
          </button>
        </div>

        {/* Pins Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {activeTab === 'created' && userPins.map(pin => (
            <PinCard key={pin.id} pin={pin} />
          ))}
          {activeTab === 'saved' && savedPinObjects.map(pin => (
            <PinCard key={pin.id} pin={pin} />
          ))}
          {((activeTab === 'created' && userPins.length === 0) ||
            (activeTab === 'saved' && savedPinObjects.length === 0)) && (
            <div className="text-center text-gray-500 col-span-full py-10">
              No pins to show yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}