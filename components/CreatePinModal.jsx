// components/CreatePinModal.jsx
'use client';
import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';

export default function CreatePinModal() {
  const { createPinOpen, setCreatePinOpen, addPin } = useAppContext();
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [authorAvatar, setAuthorAvatar] = useState('https://i.pravatar.cc/40?img=8');

  if (!createPinOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl || !title) return;
    addPin({
      imageUrl,
      title,
      description,
      author: author || 'Anonymous',
      authorAvatar: authorAvatar || 'https://i.pravatar.cc/40?img=9',
    });
    setImageUrl('');
    setTitle('');
    setDescription('');
    setAuthor('');
    setCreatePinOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setCreatePinOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-700 rounded-xl max-w-md w-full p-6 relative text-gray-900 dark:text-white">
        <button
          onClick={() => setCreatePinOpen(false)}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Create Pin</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-600 dark:text-white"
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-600 dark:text-white"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-600 dark:text-white"
            rows={2}
          />
          <input
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-600 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}