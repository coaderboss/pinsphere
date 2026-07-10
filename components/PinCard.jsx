// components/PinCard.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useAppContext } from '@/context/AppContext';
import BoardSelector from './BoardSelector';

export default function PinCard({ pin }) {
  const { savedPins, unsavePin } = useAppContext();
  const [showBoardSelector, setShowBoardSelector] = useState(false);
  const isSaved = savedPins.hasOwnProperty(pin.id);

  const handleSaveClick = (e) => {
    e.preventDefault(); // link ko follow hone se roke
    e.stopPropagation();
    if (isSaved) {
      unsavePin(pin.id);
    } else {
      setShowBoardSelector(!showBoardSelector);
    }
  };

  return (
// components/PinCard.jsx (sirf className change)
      <Link href={`/pin/${pin.id}`} className="pin-card block cursor-pointer break-inside-avoid mb-4">        
      <div className="relative">
        <img src={pin.imageUrl} alt={pin.title} className="w-full rounded-xl" />
        <button
          onClick={handleSaveClick}
          className={`save-button flex items-center gap-1 absolute top-3 right-3 ${
            isSaved ? 'opacity-100 bg-black/70 hover:bg-black/80' : ''
          }`}
        >
          {isSaved ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Saved
            </>
          ) : (
            'Save'
          )}
        </button>
        {showBoardSelector && !isSaved && (
          <div className="absolute top-10 right-3 z-30">
            <BoardSelector pinId={pin.id} onClose={() => setShowBoardSelector(false)} />
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm truncate dark:text-white">{pin.title}</h3>
        <div className="flex items-center gap-2 mt-2">
          <img src={pin.authorAvatar} alt={pin.author} className="w-6 h-6 rounded-full object-cover" />
          <span className="text-xs text-gray-500 dark:text-gray-400 truncate">{pin.author}</span>
        </div>
      </div>
    </Link>
  );
}