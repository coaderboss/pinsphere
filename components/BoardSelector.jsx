// components/BoardSelector.jsx
'use client';
import { useAppContext } from '@/context/AppContext';

export default function BoardSelector({ pinId, onClose }) {
  const { boards, savePin } = useAppContext();

  const handleSelect = (boardId) => {
    savePin(pinId, boardId);
    onClose();
  };

  return (
    <div
      className="absolute top-10 right-3 bg-white dark:bg-gray-700 rounded-xl shadow-2xl border dark:border-gray-600 w-48 py-2 z-30"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="px-3 pb-1 text-xs font-semibold text-gray-500 dark:text-gray-300">
        Save to board
      </p>
      {boards.map(board => (
        <button
          key={board.id}
          onClick={() => handleSelect(board.id)}
          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-600 dark:text-white flex items-center gap-2"
        >
          <div className="w-6 h-6 rounded bg-gray-200 overflow-hidden flex-shrink-0">
            <img src={board.cover} alt={board.name} className="w-full h-full object-cover" />
          </div>
          {board.name}
        </button>
      ))}
    </div>
  );
}