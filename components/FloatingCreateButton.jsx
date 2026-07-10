// components/FloatingCreateButton.jsx
'use client';
import { useAppContext } from '@/context/AppContext';

export default function FloatingCreateButton() {
  const { setCreatePinOpen } = useAppContext();

  return (
    <button
      onClick={() => setCreatePinOpen(true)}
      className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-xl flex items-center justify-center z-40 transition-transform hover:scale-110"
      aria-label="Create Pin"
    >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
}