// components/PinModal.jsx
'use client';
import { useAppContext } from '@/context/AppContext';
import { useEffect, useState } from 'react';
import BoardSelector from './BoardSelector';

export default function PinModal() {
  const { selectedPin, setSelectedPin, savedPins, unsavePin } = useAppContext();
  const [showBoardSelector, setShowBoardSelector] = useState(false);

  if (!selectedPin) return null;

  const isSaved = savedPins.hasOwnProperty(selectedPin.id);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setSelectedPin(null);
  };

  useEffect(() => {
    // Close modal on Escape key
    const handleEsc = (e) => { if (e.key === 'Escape') setSelectedPin(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [setSelectedPin]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={() => setSelectedPin(null)}
          className="absolute top-4 right-4 p-1 bg-gray-200 hover:bg-gray-300 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={selectedPin.imageUrl}
          alt={selectedPin.title}
          className="w-full max-h-[60vh] object-contain bg-gray-100"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{selectedPin.title}</h2>
          <p className="text-gray-600 mb-4">{selectedPin.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={selectedPin.authorAvatar}
                alt={selectedPin.author}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{selectedPin.author}</span>
            </div>
            <div className="relative">
              <button
                onClick={() => {
                  if (isSaved) unsavePin(selectedPin.id);
                  else setShowBoardSelector(!showBoardSelector);
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm ${
                  isSaved
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {isSaved ? 'Saved' : 'Save'}
              </button>
              {showBoardSelector && !isSaved && (
                <BoardSelector pinId={selectedPin.id} onClose={() => setShowBoardSelector(false)} />
              )}
            </div>
          </div>
          {/* Comments placeholder */}
          <div className="mt-6 border-t pt-4">
            <h3 className="font-semibold mb-2">Comments</h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Add a comment"
                className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <button className="text-red-600 font-semibold text-sm">Post</button>
            </div>
            <p className="text-sm text-gray-500 mt-3">No comments yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}