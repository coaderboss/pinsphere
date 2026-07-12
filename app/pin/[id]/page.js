'use client';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import BoardSelector from '@/components/BoardSelector';
import { useState } from 'react';

export default function PinDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { allPins, savedPins, unsavePin } = useAppContext();
  
  const [showBoardSelector, setShowBoardSelector] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]); // Live comments state
  const [copySuccess, setCopySuccess] = useState(false);

  const pinId = parseInt(params.id);
  const pin = allPins.find(p => p.id === pinId);

  if (!pin) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">Pin not found</div>;

  const isSaved = savedPins.hasOwnProperty(pin.id);

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setComments([...comments, { id: Date.now(), text: commentText, user: 'You' }]);
    setCommentText('');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
    <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm px-2 sm:px-4 py-3 flex items-center gap-2 sm:gap-4 transition-colors">        <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="font-bold text-lg truncate">{pin.title}</h1>
        <div className="flex-1" />
        
        {/* New Share Button */}
        <button onClick={handleShare} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
          {copySuccess && <span className="absolute top-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded">Copied!</span>}
        </button>

        <div className="relative ml-2">
          <button
            onClick={() => { isSaved ? unsavePin(pin.id) : setShowBoardSelector(!showBoardSelector); }}
            className={`px-6 py-2 rounded-full font-semibold text-sm ${isSaved ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300' : 'bg-red-600 text-white hover:bg-red-700'}`}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>
          {showBoardSelector && !isSaved && (
             <div className="absolute right-0 mt-2 z-50">
               <BoardSelector pinId={pin.id} onClose={() => setShowBoardSelector(false)} />
             </div>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <img loading="lazy" src={pin.imageUrl} alt={pin.title} className="w-full rounded-2xl shadow-md max-h-[70vh] object-contain bg-gray-100 dark:bg-gray-800" />
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{pin.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{pin.description}</p>
          <div className="flex items-center gap-3 mt-6">
            <img src={pin.authorAvatar} alt={pin.author} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium">{pin.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Creator</p>
            </div>
          </div>
          
          <div className="mt-8 border-t dark:border-gray-700 pt-6">
            <h3 className="font-semibold mb-3">Comments ({comments.length})</h3>
            
            {/* Live Comment Form */}
            <form onSubmit={handlePostComment} className="flex gap-2 mb-4">
              <input type="text" value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Add a comment..." className="flex-1 border dark:border-gray-600 bg-transparent rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-300" />
              <button type="submit" className="bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-red-700 disabled:opacity-50" disabled={!commentText.trim()}>Post</button>
            </form>

            {/* Render Comments */}
            {comments.length === 0 ? (
              <p className="text-sm text-gray-400">No comments yet. Be the first!</p>
            ) : (
              <div className="space-y-3">
                {comments.map(c => (
                  <div key={c.id} className="flex gap-2 items-start">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-bold">{c.user}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}